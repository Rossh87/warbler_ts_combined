import React, { FunctionComponent, useState, ReactEventHandler } from "react";
import CenterGrid from "./CenterGrid";
import TextInput from "../TextInput";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import ColumnItem from "../ColumnItem";
// MUI deps
import { createStyles, makeStyles, WithStyles } from "@material-ui/styles";
import { Theme, Typography, Box, Avatar, TextField } from "@material-ui/core";

// Local components
import MessageDialog from "../MessageDialog";
import UserAvatar from "../UserAvatar";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column"
        },

        overlay: {
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            backgroundColor: "transparent"
        }
    })
);

/*Needed: 
Heading ('Home')
PseudoInput
OwnMessages
*/

const CenterHeading: FunctionComponent = (props) => {
    return (
        <ColumnItem>
            <Typography variant="h4">Home</Typography>
        </ColumnItem>
    );
};

const Transparency: FunctionComponent = (props) => {
    const classes = useStyles();
    const [isOpen, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose: ReactEventHandler = (e) => {
        e.stopPropagation();
        setOpen(false);
    };

    return (
        <div className={classes.overlay} onClick={handleOpen}>
            <div>Here's text to click</div>
            <MessageDialog handleClose={handleClose} open={isOpen} />
        </div>
    );
};

const PseudoInput: FunctionComponent = (props) => {
    const classes = useStyles();
    const photoURL = useSelector(
        (state: RootState) => state.user.photos[0].value
    );

    return (
        <ColumnItem
            display="flex"
            justifyContent="space-between"
            position="relative"
        >
            <UserAvatar />
            <TextInput formID="PseudoInput" inputLabel="What's on your mind?" />
            <Transparency />
        </ColumnItem>
    );
};

const CenterHome: FunctionComponent = (props) => {
    return (
        <CenterGrid>
            <CenterHeading />
            <PseudoInput />
        </CenterGrid>
    );
};
export default CenterHome;
