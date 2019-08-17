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

export const makeLoadingSelector: ILoadingSelector = (keys, desiredValue) => {
    if (Array.isArray(keys)) {
        return function arraySelector(state) {
            // break this up to bamboozle the extremely broad type of Object.keys
            // in native JS
            const keyArray = (Object.keys(
                state.loadingState
            ) as unknown) as Array<keyof RootState["loadingState"]>;

            return keyArray.some(
                (key) => state.loadingState[key] === desiredValue
            );
        };
    }

    return function singleParamSelector(state) {
        return state.loadingState[keys] === desiredValue;
    };
};
