import React, { FunctionComponent } from "react";
// MUI deps
import { createStyles, makeStyles, WithStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { BoxProps } from "@material-ui/core/Box";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            borderBottom: "1px solid gray",
            padding: theme.spacing(2)
        }
    })
);

const ColumnItem: FunctionComponent<BoxProps> = ({ children, ...props }) => {
    const classes = useStyles();
    return (
        <Box className={classes.root} {...props}>
            {children}
        </Box>
    );
};
export default ColumnItem;
