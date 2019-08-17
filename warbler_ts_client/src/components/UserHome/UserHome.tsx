import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import {
    makeLoadingSelector,
    conditionalRender
} from "../../utils/componentUtils";

// MUI deps
import { Grid } from "@material-ui/core";
import { createStyles, makeStyles, WithStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

// Local components
import LeftNav from "../LeftNav/LeftNav";
import CenterContent from "../CenterContent/ContentSwitch";
import RightFeed from "../RightFeed/RightFeed";
import Loading from "../Loading";

// Action creator
import { fetchUserAction } from "../../store/user/userActions";
import { fetchMessagesAction } from "../../store/messages/messagesActions";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex"
        }
    })
);

const SiteContent: FunctionComponent = (props) => {
    const classes = useStyles();

    return (
        <Grid container justify="center">
            <Grid
                className={classes.root}
                item
                container
                md={8}
                justify="center"
            >
                <LeftNav />
                <CenterContent />
                <RightFeed />
            </Grid>
        </Grid>
    );
};

const UserHome: FunctionComponent = (props) => {
    const dispatch = useDispatch();
    const dataReady = useSelector(
        makeLoadingSelector(["user", "messages"], "ready")
    );

    useEffect(() => {
        dispatch(fetchUserAction());
        dispatch(fetchMessagesAction());
    }, []);

    const renderContent = conditionalRender(dataReady, SiteContent, Loading);
    return renderContent();
};

export default UserHome;
