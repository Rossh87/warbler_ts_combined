import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { conditionalRender } from "../utils/componentUtils";
import { Switch, Route } from "react-router-dom";
import UserHome from "./UserHome/UserHome";
import Landing from "./Landing/Landing";
// const Content: FunctionComponent = (props) => {
//     const sessionIsActive = useSelector<RootState, boolean>(
//         (state) => state.user.sessionIsActive
//     );

//     const renderContent = conditionalRender(sessionIsActive, Home, Landing);

//     return renderContent();
// };

const Home: FunctionComponent = (props) => {
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/users/:id" component={UserHome} />
        </Switch>
    );
};

export default Home;
