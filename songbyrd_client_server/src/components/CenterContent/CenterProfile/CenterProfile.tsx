import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/rootReducer";
import { IUserState } from "../../../store/user/userTypes";

// MUI deps
import { createStyles, makeStyles, WithStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

// local components
import CenterGrid from "../CenterGrid";
import ProfileGraphic from "./ProfileGraphic";
import ProfileHeader from "./ProfileHeader";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {}
    })
);

const CenterProfile: FunctionComponent = (props) => {
    const classes = useStyles();

    const profileInfo = useSelector<RootState, IUserState>(
        (state) => state.user
    );

    return (
        <CenterGrid>
            <ProfileHeader displayName={profileInfo.displayName} />
            <ProfileGraphic profileInfo={profileInfo} />
        </CenterGrid>
    );
};
export default CenterProfile;
