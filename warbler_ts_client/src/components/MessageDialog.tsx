import React, { FunctionComponent, ReactEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
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
import TextInput from "./TextInput";

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
    const [msgText, setMsgText] = useState("");

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
                    <IconButton onClick={handleClose}>
                        <Cancel />
                    </IconButton>

                    <Button>Chirp</Button>
                </Grid>

                <Grid className={classes.modalGrid} container>
                    <UserAvatar />
                    <form
                        action="
                    
                    <TextInput
                        value={msgText}
                        onChange={handleChange}
                        variant='filled'
                        multiline
                    />
                    "
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
