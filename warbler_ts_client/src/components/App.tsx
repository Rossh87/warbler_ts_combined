import React, { FunctionComponent, useEffect } from "react";
import Home from "./Home";
import ProviderRoot from "./ProviderRoot";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/rootReducer";
import { conditionalRender } from "../utils/componentUtils";

const App: FunctionComponent = (props) => {
    return (
        <ProviderRoot>
            <Home />
        </ProviderRoot>
    );
};

export default App;
