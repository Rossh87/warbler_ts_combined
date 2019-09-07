import React, { FunctionComponent, Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/rootReducer";
import { TAllMessages } from "../../../store/messages/messagesTypes";

// MUI deps
import { createStyles, makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

// local components
import MessageCard from "../../MessageCard/MessageCard";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {}
    })
);

const UserMessages: FunctionComponent = (props) => {
    const classes = useStyles();

    const messagesAuthoredByUser = useSelector<RootState, TAllMessages>(
        (state) => state.messages
    );

    const renderedMessages = messagesAuthoredByUser.map((msg) => {
        return <MessageCard key={msg._id} {...msg} />;
    });

    return <Fragment>{renderedMessages}</Fragment>;
};

export default UserMessages;
