import React, { FunctionComponent } from "react";
import { IMessage } from "../../store/messages/messagesTypes";
import { format, parseISO } from "date-fns";

// MUI deps
import { createStyles, makeStyles, WithStyles } from "@material-ui/styles";
import { Theme, Grid, Avatar, Typography } from "@material-ui/core";

// local components
import ColumnItem from "../ColumnItem";
import MessageCardMenu from "./MessageCardMenu";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            borderBottom: "1px solid gray",
            padding: theme.spacing(2),
            "&:hover": {
                cursor: "pointer",
                backgroundColor: theme.palette.primary.light
            }
        },

        avatar: {
            width: 60,
            height: 60
        }
    })
);

interface Props extends IMessage {}

const MessageCard: FunctionComponent<Props> = (props) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={2}>
                <Avatar
                    className={classes.avatar}
                    src={props.author.photos[0].value}
                    alt="profile photo of message author"
                />
            </Grid>

            <Grid direction="column" item container xs={10}>
                <Grid container item justify="space-between" wrap="nowrap">
                    <Typography variant="body1">
                        {`${props.author.displayName} ${format(
                            parseISO(props.createdAt),
                            "PPP"
                        )}`}
                    </Typography>
                    <MessageCardMenu />
                </Grid>
                <Typography variant="body2">{props.text}</Typography>
            </Grid>
        </Grid>
    );
};
export default MessageCard;
