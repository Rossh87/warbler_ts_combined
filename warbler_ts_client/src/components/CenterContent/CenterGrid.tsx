import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";

// MUI deps
import theme from "../../muiTheme";
import { Grid } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: "100vh",
            borderRight: "1px solid gray",
            borderLeft: "1px solid gray",
            display: "flex",
            flexDirection: "column"
        }
    })
);

const CenterGrid: FunctionComponent = ({ children }) => {
    const classes = useStyles();
    return (
        <Grid item xs={6} className={classes.root}>
            {children}
        </Grid>
    );
};

export default CenterGrid;
