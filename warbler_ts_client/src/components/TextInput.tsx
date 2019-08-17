import React, { FunctionComponent, useState, ChangeEvent } from "react";
// MUI deps
import { createStyles, makeStyles, WithStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import { FormControl, InputLabel, FilledInput } from "@material-ui/core";
import { TextFieldProps } from "@material-ui/core/TextField";

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

interface Props {
    formID: string;
    inputLabel: string;
}

const TextInput: FunctionComponent<Props> = ({ formID, inputLabel }) => {
    const classes = useStyles();

    const [inputValue, setInputValue] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value as string);
    };

    return (
        <FormControl className={classes.root} variant="filled">
            <InputLabel htmlFor={formID}>{inputLabel}</InputLabel>
            <FilledInput
                disableUnderline
                className={classes.input}
                id={formID}
                onChange={handleChange}
                value={inputValue}
            />
        </FormControl>
    );
};
export default TextInput;
