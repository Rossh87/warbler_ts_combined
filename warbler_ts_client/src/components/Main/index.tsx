import React, { useEffect } from 'react';
import {connect} from 'react-redux';

// This is just a type
import {Dispatch} from 'redux';

// Get type for redux state
import {RootState} from '../../store/rootReducer';

// Get functions to request and dispatch API data
import {useFetchAllMsgs, useFetchUser} from '../../utils/networkSvcs';

interface Props extends RootState {
    dispatch: Dispatch
};

export const Main: React.FC<Props> = ({user, messages, dispatch}) => {
    const baseURL = 'http://localhost:8001/api/';
    useFetchAllMsgs(baseURL + 'messages', dispatch);
    useFetchUser(baseURL + 'user', dispatch);

    return(
        <div>This is the main component</div>
    );
};

const mapStateToProps = (state: RootState) => ({
    user: state.user,
    messages: state.messages
});

export default connect(mapStateToProps)(Main);