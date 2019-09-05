import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/rootReducer";

// MUI deps
import { createStyles, makeStyles, WithStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

// local components
import ColumnItem from "../../ColumnItem";
import UserAvatar from "../../UserAvatar";
import TextInput from "../../TextInput";
import Transparency from "./Transparency";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: "relative"
        }
    })
);

const PseudoInput: FunctionComponent = (props) => {
    const classes = useStyles();

    const photoURL = useSelector(
        (state: RootState) => state.user.photos[0].value
    );

    return (
        <ColumnItem
            justify="space-between"
            classes={{
                root: classes.root
            }}
        >
            <UserAvatar />
            <TextInput
                placeholder="What's on your mind?"
                id="pseudo-text-input"
                variant="filled"
            />
            <Transparency />
        </ColumnItem>
    );
};

export default PseudoInput;
