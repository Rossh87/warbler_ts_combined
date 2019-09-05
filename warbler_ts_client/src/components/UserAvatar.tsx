import React, { FunctionComponent } from "react";
// MUI deps
import { createStyles, makeStyles, WithStyles } from "@material-ui/styles";
import { Theme, Avatar } from "@material-ui/core";
import { AvatarProps } from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {}
    })
);

interface Props extends AvatarProps {}

const UserAvatar: FunctionComponent<Props> = (props) => {
    const classes = useStyles();
    const photoURL = useSelector(
        (state: RootState) => state.user.photos[0].value
    );

    return <Avatar {...props} alt="profile photo of user" src={photoURL} />;
};
export default UserAvatar;
