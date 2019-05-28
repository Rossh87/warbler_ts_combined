import React, { useEffect } from 'react';
import {connect} from 'react-redux';
// This is just a type
import {Dispatch} from 'redux';

import axios from 'axios';

// Get type for redux state
import {RootState} from '../../store/rootReducer';

// Get action creators
import {populateMessages} from '../../store/messages/messagesActions';

interface Props extends RootState {
    dispatch: Dispatch
};

// Export bare component (w/out HOCs) to facilitate unit
// testing.  Network/dispatch calls can be made in extractable units
// with their own unit tests.
export const Main: React.FC<Props> = ({user, messages, dispatch}) => {
    useEffect(() => {
        axios.get('http://localhost:8001/api/messages')
            .then(res => res.data)
            .then(data => dispatch(populateMessages(data)));

            console.log('mounted')
    }, []);

    return(
        <div>This is the main component</div>
    );
};

const mapStateToProps = (state: RootState) => ({
    user: state.user,
    messages: state.messages
});

export default connect(mapStateToProps)(Main);