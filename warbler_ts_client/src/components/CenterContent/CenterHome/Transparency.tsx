import React, { FunctionComponent, ReactEventHandler, useState } from "react";
// MUI deps
import { createStyles, makeStyles, WithStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

// local components
import MessageDialog from "../../MessageDialog";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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

const Transparency: FunctionComponent = (props) => {
    const classes = useStyles();
    const [isOpen, setOpen] = useState(false);

    const handleOpen: ReactEventHandler = (e) => {
        e.stopPropagation();
        setOpen(true);
    };

    const handleClose: ReactEventHandler = (e) => {
        e.stopPropagation();
        setOpen(false);
    };

    return (
        <div className={classes.overlay} onClick={handleOpen}>
            <MessageDialog handleClose={handleClose} open={isOpen} />
        </div>
    );
};

export default Transparency;
