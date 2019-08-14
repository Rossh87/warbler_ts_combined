import React from "react";

// This single component wraps its children with Router and Redux
// store providers.  Esp. useful for rendering in integration
// tests.
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import Store from "../store";
import muiTheme from "../muiTheme";

interface Props {
    mockStore?: {};
}

const ProviderRoot: React.FC<Props> = ({ children, mockStore }) => {
    return (
        <Store mockStore={mockStore}>
            <Router>
                <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
            </Router>
        </Store>
    );
};

export default ProviderRoot;
