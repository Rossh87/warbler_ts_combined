import React, { FunctionComponent, ReactElement } from "react";

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
