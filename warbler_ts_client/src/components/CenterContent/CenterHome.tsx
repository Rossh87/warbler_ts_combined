import React, { FunctionComponent } from "react";
import CenterGrid from "./CenterGrid";
import TextInput from "../TextInput";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import ColumnItem from "../ColumnItem";
// MUI deps
import { createStyles, makeStyles, WithStyles } from "@material-ui/styles";
import { Theme, Typography, Box, Avatar, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column"
        },

        avatar: {
            width: 55,
            height: 55,
            marginRight: theme.spacing(1)
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

const PseudoInput: FunctionComponent = (props) => {
    const classes = useStyles();
    const photoURL = useSelector(
        (state: RootState) => state.user.photos[0].value
    );

    return (
        <ColumnItem display="flex" justifyContent="space-between">
            <Avatar src={photoURL} className={classes.avatar} />
            <TextInput formID="PseudoInput" inputLabel="What's on your mind?" />
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
