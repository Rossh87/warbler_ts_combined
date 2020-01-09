import React, {
    FunctionComponent,
    ReactEventHandler,
    useState,
    ChangeEvent,
    FormEvent
} from "react";
import { useDispatch } from "react-redux";

// MUI deps
import { createStyles, makeStyles, WithStyles } from "@material-ui/styles";
import {
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

// Store stuff
import { createMessageAction } from "../store/messages/messagesActions";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},

        paper: {
            width: "100%"
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

        scrollPaper: {
            transform: "translatey(-8%)"
        },

        textInput: {
            minWidth: "600px"
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
    const dispatch = useDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMsgText(e.currentTarget.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(createMessageAction(msgText));
        setMsgText("");
        handleClose(e);
    };

    const textAreaProps = {
        rows: 7,
        columns: 100
    };

    return (
        <Dialog
            classes={{
                scrollPaper: classes.scrollPaper
            }}
            open={open}
            onClose={handleClose}
            maxWidth="lg"
        >
            <Paper className={classes.paper}>
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
                    <form onSubmit={handleSubmit} id="new-message">
                        <TextInput
                            className={classes.textInput}
                            value={msgText}
                            onChange={handleChange}
                            variant="filled"
                            multiline
                            id="new-message-text-input"
                            inputProps={textAreaProps}
                        />
                    </form>
                </Grid>

                <Grid
                    className={classes.modalGrid}
                    justify="space-between"
                    container
                >
                    <Button type="submit" form="new-message">
                        Post
                    </Button>
                </Grid>
            </Paper>
        </Dialog>
    );
};
export default MessageDialog;
