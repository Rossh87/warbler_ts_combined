import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";

// MUI deps
import theme from "../../muiTheme";
import { Grid } from "@material-ui/core";
import { createStyles, makeStyles, WithStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

// local components
import CenterHome from "./CenterHome/CenterHome";
import CenterProfile from "./CenterProfile/CenterProfile";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            border: "1px solid red"
        }
    })
);

const Notify: FunctionComponent = (props) => {
    return <p>Notifications</p>;
};

const ContentSwitch: FunctionComponent = (props) => {
    return (
        <Switch>
            <Route path="/home" component={CenterHome} />
            <Route path="/notifications" component={Notify} />
            <Route path="/profile" component={CenterProfile} />
        </Switch>
    );
};

export default ContentSwitch;
