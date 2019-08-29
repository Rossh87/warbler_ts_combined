import React, { FunctionComponent, useState, ReactEventHandler } from "react";
// MUI deps
import { createStyles, makeStyles, WithStyles } from "@material-ui/styles";
import {
    TextField,
    Theme,
    Dialog,
    Paper,
    Grid,
    IconButton,
    Button
} from "@material-ui/core";
import { Cancel } from "@material-ui/icons";

// Local components
import UserAvatar from "./UserAvatar";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},

        paper: {
            padding: theme.spacing(4),
            maxWidth: "800px"
        },

        chirp: {
            borderRadius: theme.spacing(2)
        },

        modalGrid: {
            padding: theme.spacing(1),
            width: "100%"
        },

        modalGridTop: {
            borderBottom: "1px solid gray",
            padding: theme.spacing(1),
            width: "100%"
        },

        textField: {
            width: "500px",
            marginLeft: theme.spacing(1),
            border: "none"
        },

        scrollPaper: {
            transform: "translatey(-8%)"
        }
    })
);

interface Props {
    open: boolean;
    handleClose: ReactEventHandler;
}

const MessageDialog: FunctionComponent<Props> = ({ open, handleClose }) => {
    const classes = useStyles();

    const textAreaProps = {
        rows: 7
    };

    return (
        <Dialog
            classes={{
                scrollPaper: classes.scrollPaper
            }}
            open={open}
            onClose={handleClose}
        >
            <Paper>
                <Grid
                    container
                    flex-direction="row"
                    justify="space-between"
                    className={classes.modalGridTop}
                >
                    <IconButton>
                        <Cancel />
                    </IconButton>

                    <Button>Chirp</Button>
                </Grid>

                <Grid className={classes.modalGrid} container>
                    <UserAvatar />
                    <TextField
                        multiline
                        className={classes.textField}
                        id="new-chirp-field"
                        variant="filled"
                        inputProps={textAreaProps}
                    />
                </Grid>

                <Grid
                    className={classes.modalGrid}
                    justify="space-between"
                    container
                >
                    <p>Top row</p>
                </Grid>
            </Paper>
        </Dialog>
    );
};
export default MessageDialog;
