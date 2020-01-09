import React, { FunctionComponent } from "react";
// MUI deps
import { createStyles, makeStyles, WithStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {}
    })
);
const Loading: FunctionComponent = (props) => {
    const classes = useStyles();
    return <p>Loading...</p>;
};
export default Loading;
