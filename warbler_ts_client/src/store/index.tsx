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

// Export the 'bare' store for possible use in testing
export const bareStore = createStore(
    rootReducer,
    composeWithDevTools()
);

// Store component renders all children with access to
// redux store for reuse in testing
const Store: React.FC = ({children}) => {
    return(
        <Provider store={bareStore}>
            { children }
        </Provider>
    )   
};

export default Store;
