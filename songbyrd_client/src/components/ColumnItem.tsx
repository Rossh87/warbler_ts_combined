import React, { FunctionComponent } from "react";
import { GridProps } from "@material-ui/core/Grid";
// MUI deps
import { createStyles, makeStyles, WithStyles } from "@material-ui/styles";
import { Theme, Grid } from "@material-ui/core";
import { BoxProps } from "@material-ui/core/Box";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            borderBottom: "1px solid gray",
            padding: theme.spacing(2)
        }
    })
);

const ColumnItem: FunctionComponent<GridProps> = ({ children, ...props }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} {...props}>
            {children}
        </Grid>
    );
};
export default ColumnItem;
