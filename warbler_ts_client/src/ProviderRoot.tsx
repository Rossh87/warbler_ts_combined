import React from 'react';
// Single component wraps its children with Router and Redux
// store providers.  Esp. useful for rendering in integration
// tests.
import {BrowserRouter as Router} from 'react-router-dom';

// Get store provider component that wraps its children
// w/ store provider
import Store from './store';

interface Props {
    mockStore?: {}
};

export const ProviderRoot: React.FC<Props> = ({children, mockStore}) => {
    return(
        <Router>
            <Store mockStore={mockStore}>
                {children}
            </Store>
        </Router>
    )
};

