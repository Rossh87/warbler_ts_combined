import { conditionalRender, makeLoadingSelector } from "./componentUtils";
import { renderToString } from "react-dom/server";
import React from "react";

// Note: we use renderToString to force React to render JSX  without
// mounting to DOM, not because we especially need the string result.
describe("the helper function conditionalRender", () => {
    it('returns correct component if the condition evaluates to "true"', () => {
        const TrueComponent: any = () => "condition is true";
        const FalseComponent: any = () => "condition is false";

        const condition = (val: boolean) => val;

        const trueResult = renderToString(
            conditionalRender(condition(true), TrueComponent, FalseComponent)()
        );

        const falseResult = renderToString(
            conditionalRender(condition(false), TrueComponent, FalseComponent)()
        );

        expect(trueResult).toEqual(TrueComponent());
        expect(falseResult).toEqual(FalseComponent());
    });

    it("passes props to the component it selects", () => {
        const outerMock = jest.fn();

        const TrueComponent: any = (props: any) => {
            outerMock(props);
            return "condition is true";
        };

        const FalseComponent: any = () => "condition is false";

        const outerProps = {
            key1: "val1",
            key2: "val2"
        };

        const wrapperFn = () => {
            return renderToString(
                conditionalRender(
                    true,
                    TrueComponent,
                    FalseComponent,
                    outerProps
                )()
            );
        };

        const result = wrapperFn();

        expect(outerMock).toHaveBeenCalledWith(
            expect.objectContaining(outerProps)
        );
    });
});

describe("the selector factory makeLoadingSelector", () => {
    it("returns a function that returns false if any properties in state are != to desired value", () => {
        const state = {
            loadingState: {
                key1: true,
                key2: true,
                key3: "somestring"
            }
        };

        const arraySelector = makeLoadingSelector(
            ["key1", "key2"] as any,
            true as any
        );

        expect(arraySelector(state as any)).toBe(true);

        state.loadingState.key1 = false;

        expect(arraySelector(state as any)).toBe(false);

        const singleParamSelector = makeLoadingSelector(
            "key3" as any,
            "somestring" as any
        );

        expect(singleParamSelector(state as any)).toBe(true);
    });
});
