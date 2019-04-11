import React from 'react';
import ReactDOM from 'react-dom';

// Get store provider component that wraps its children
// in the store provider
import ProviderRoot from './ProviderRoot';

// Get local components
import App from './components/App';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.render(
    <ProviderRoot>
        <App />
    </ProviderRoot>,
    root
);