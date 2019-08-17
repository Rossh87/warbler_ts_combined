import React, { FunctionComponent } from "react";

// MUI deps
import theme from "../../muiTheme";
import { Grid } from "@material-ui/core";
import { createStyles, makeStyles, WithStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {}
    })
);

const RightFeed: FunctionComponent = (props) => {
    const classes = useStyles();
    return (
        <Grid xs={3} item className={classes.root}>
            <p>Here's the feed</p>
        </Grid>
    );
};

export default RightFeed;
