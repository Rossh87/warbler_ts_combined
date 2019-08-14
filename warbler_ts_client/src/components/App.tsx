import React, { FunctionComponent, useEffect } from "react";
import UserHome from "./UserHome/UserHome";
import ProviderRoot from "./ProviderRoot";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/rootReducer";
import { conditionalRender } from "../utils/componentUtils";
import { checkForSessionAction } from "../store/user/userActions";
import Landing from "./Landing/Landing";

const ConditionalContent: FunctionComponent = (props) => {
    const sessionIsActive = useSelector<RootState, boolean>(
        (state) => state.user.sessionIsActive
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkForSessionAction());
    });

    const appContent = conditionalRender(sessionIsActive, UserHome, Landing);

    return appContent();
};

const App: FunctionComponent = () => {
    return (
        <ProviderRoot>
            <ConditionalContent />
        </ProviderRoot>
    );
};

export default App;
