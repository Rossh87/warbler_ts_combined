import React, { FunctionComponent } from "react";
// MUI deps
import { createStyles, makeStyles, WithStyles } from "@material-ui/styles";
import { Theme, Typography } from "@material-ui/core";

// local components
import ColumnItem from "../../ColumnItem";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {}
    })
);

const CenterHeading: FunctionComponent = (props) => {
    return (
        <ColumnItem>
            <Typography variant="h4">Home</Typography>
        </ColumnItem>
    );
};

export default CenterHeading;
