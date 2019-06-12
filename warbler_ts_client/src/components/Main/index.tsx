import React, { useEffect, ReactElement } from 'react';
import {connect} from 'react-redux';

// MUI components
import {Paper, Container, Grid} from '@material-ui/core';

// Local Components
import Message from '../Message';

// This is just a type
import {Dispatch} from 'redux';

// Get types that describe Redux state
import {RootState} from '../../store/rootReducer';
import {UserState} from '../../store/user/userTypes';
import {IMessage} from '../../store/messages/messagesTypes';

// Get functions to request and dispatch API data
import {useFetchAllMsgs, useFetchUser} from '../../utils/networkSvcs';

interface Props extends RootState {
    dispatch: Dispatch
};

export const Main: React.FC<Props> = ({user, messages, dispatch}) => {
    const baseURL = 'http://localhost:8001/api/';
    useFetchAllMsgs(baseURL + 'messages', dispatch);
    useFetchUser(baseURL + 'user', dispatch);

    const buildMessages = (messages: Props['messages']): ReactElement [] => {
        return messages.map(msg => {
            return (
                <Message {...msg} key={msg._id} />
            )
        })
    };

    return(
        <Container maxWidth='lg'>
            <Grid container>
                {buildMessages(messages)}
            </Grid>
        </Container>
    );
};

const mapStateToProps = (state: RootState) => ({
    user: state.user,
    messages: state.messages
});

export default connect(mapStateToProps, null)(Main);