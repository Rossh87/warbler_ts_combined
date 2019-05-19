// Bring in pkgs to build Provider component
import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

// Helper pkg to conveniently add redux devtools and
// middleware.  This is critical for typescript as 
// this pkg also contains types needed to add use redux 
// devtools extension, eg adds type for window object that 
// includes a property for devtools extension
import {composeWithDevTools} from 'redux-devtools-extension';

// Get main reducer
import rootReducer from './rootReducer';

interface Props {
    mockStore?: {}
}

// Store component renders all children with access to
// redux store for reuse in testing
const Store: React.FC<Props> = ({children, mockStore}) => {

    const bareStore = createStore(
        rootReducer,
        mockStore,
        composeWithDevTools()
    );

    return(
        <Provider store={bareStore}>
            { children }
        </Provider>
    )   
};

export default Store;
