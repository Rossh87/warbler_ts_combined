import React, { FunctionComponent, forwardRef } from "react";
import { Link, LinkProps } from "react-router-dom";

const RouterLink = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
    return <Link innerRef={ref as any} {...props} />;
});
export default RouterLink;
