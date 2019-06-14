import React, { useEffect, ReactElement } from 'react';
import {connect, Connect, MapStateToProps} from 'react-redux';

// MUI components
import {Paper, Container, Grid} from '@material-ui/core';

// Local Components
import MessageGrid from '../../molecules/MessageGrid';
import ProfileCard from '../ProfileCard';

// This is just a type
import {Dispatch} from 'redux';

// Get types that describe Redux state
import {RootState} from '../../../store/rootReducer';
import {UserState} from '../../../store/user/userTypes';
import {IMessage} from '../../../store/messages/messagesTypes';

// Get functions to request and dispatch API data
import {useFetchAllMsgs, useFetchUser} from '../../../utils/networkSvcs';

interface Props extends RootState {
    dispatch: Dispatch
};

export const Main: React.FC<Props> = ({user, messages, dispatch}) => {
    const baseURL = 'http://localhost:8001/api/';
    useFetchAllMsgs(baseURL + 'messages', dispatch);
    useFetchUser(baseURL + 'user', dispatch);

    return(
        <Container maxWidth='lg'>
            <Grid container>
                <ProfileCard user={user} />
                <MessageGrid messages={messages} />
            </Grid>
        </Container>
    );
};

// Main component gets the whole store, so we can use the RootState for both
// the 'return type' type arg and the 'redux state' type arg
const mapStateToProps: MapStateToProps<RootState, Props, RootState> = (state) => ({
    user: state.user,
    messages: state.messages
});

export default connect(mapStateToProps, null)(Main);