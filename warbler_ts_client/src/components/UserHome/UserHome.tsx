import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// MUI deps
import { Grid } from "@material-ui/core";
import { createStyles, makeStyles, WithStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

// Local components
import LeftNav from "../LeftNav/LeftNav";
import CenterContent from "../CenterContent/ContentSwitch";
import RightFeed from "../RightFeed/RightFeed";

// Action creators
import { fetchUserAction } from "../../store/user/userActions";
import { fetchMessagesAction } from "../../store/messages/messagesActions";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex"
        }
    })
);

const UserHome: FunctionComponent = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserAction());
        dispatch(fetchMessagesAction());
    }, []);

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

export default UserHome;
