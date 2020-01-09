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

// Saga biz
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga';

// Get main reducer
import rootReducer from './rootReducer';

interface Props {
    mockStore?: {}
}

// Store component renders all children with access to
// redux store.  mockStore prop can be used for testing
const Store: React.FC<Props> = ({children, mockStore}) => {
    const sagaWare = createSagaMiddleware();

    const bareStore = createStore(
        rootReducer,
        mockStore,
        composeWithDevTools(
            applyMiddleware(sagaWare)
        )
    );

    sagaWare.run(rootSaga)

    return(
        <Provider store={bareStore}>
            { children }
        </Provider>
    )   
};

export default Store;
