import React, { FunctionComponent, ReactElement } from "react";
import { Selector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { RootAction } from "../store/rootAction";
import { TLoadingStateValues } from "../store/loadingState/loadingStateTypes";

type TConditionalRender = () => ReactElement;

export function conditionalRender<T>(
    condition: any,
    TrueComponent: FunctionComponent,
    FalseComponent: FunctionComponent,
    props?: T
): TConditionalRender {
    if (condition) {
        return function trueRender() {
            return <TrueComponent {...props} />;
        };
    }

    return function falseRender() {
        return <FalseComponent {...props} />;
    };
}

type TLoadingKey = keyof RootState["loadingState"];

interface ILoadingSelector {
    (
        key: TLoadingKey | Array<TLoadingKey>,
        desiredValue: TLoadingStateValues
    ): Selector<RootState, boolean>;
}

// Accept an array of strings, each of which represents a key of the 'loadingState'
// object in Redux store.  If the loadingState object at each of the passed keys === desiredValue,
// selector returns true.  Otherwise, it returns false.  This allows us to easily generate selectors
// That verify several pieces of store state are ready before attempting to load a component that depends
// on those states.
export const makeLoadingSelector: ILoadingSelector = (keys, desiredValue) => {
    if (Array.isArray(keys)) {
        return function arraySelector(state) {
            return keys.every(
                (key) => state.loadingState[key] === desiredValue
            );
        };
    }

    return function singleParamSelector(state) {
        return state.loadingState[keys] === desiredValue;
    };
};
