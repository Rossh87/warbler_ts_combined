import React, { FunctionComponent, useState, ChangeEvent } from "react";
// MUI deps
import { createStyles, makeStyles, WithStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import TextField, {
    TextFieldProps,
    FilledTextFieldProps
} from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flex: 1
        },

        input: {
            borderRadius: 100
        }
    })
);

interface Props extends FilledTextFieldProps {}

const TextInput: FunctionComponent<Props> = (props) => {
    const classes = useStyles();

    return <TextField {...props} />;
};
export default TextInput;
