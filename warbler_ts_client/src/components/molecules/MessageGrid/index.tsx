import React from 'react';

// Get MUI Deps
import {Grid} from '@material-ui/core';

// Get type for messages prop
import {IMessage} from '../../../store/messages/messagesTypes';

// Get local components
import Message from '../Message';

interface Props {
    messages: IMessage []
}

const MessageGrid: React.FC<Props> = ({messages}) => {

    const buildMessages = (): React.ReactElement [] => {
        return messages.map(msg => {
            return (
                // Outer component of each Message is a <Grid item/>
                <Message {...msg} key={msg._id} />
            )
        })
    };

    return(
        <Grid item container xs={9}>
            {buildMessages()}
        </Grid>
    )
}

export default MessageGrid;