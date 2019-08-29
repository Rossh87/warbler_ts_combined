import React, { FunctionComponent } from "react";
// MUI deps
import { createStyles, makeStyles, WithStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 55,
            height: 55,
            marginRight: theme.spacing(1)
        }
    })
);

const UserAvatar: FunctionComponent = (props) => {
    const classes = useStyles();
    const photoURL = useSelector(
        (state: RootState) => state.user.photos[0].value
    );

    return <Avatar className={classes.root} src={photoURL} />;
};
export default UserAvatar;
