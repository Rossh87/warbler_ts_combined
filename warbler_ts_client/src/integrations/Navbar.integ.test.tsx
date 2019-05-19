import React from 'react';

import {render, ProviderRoot, cleanup, fireEvent} from '../utils/testUtils';
import 'jest-dom/extend-expect';

// Get App component to render full tree w/ providers
import App from '../components/App';

afterEach(() => {
    cleanup();
});

describe('Using the navbar', () => {
    it('opens AuthModal correctly', () => {
        const {getByText, queryByText} = render(<ProviderRoot> <App /> </ProviderRoot>);

        const button = getByText('signin');

        expect(queryByText('Sign In With Google')).not.toBeInTheDocument();

        button.addEventListener('keydown', (e) => {console.log('keypress: ', e.charCode)})

        fireEvent.click(button);

        expect(queryByText('Sign In With Google')).toBeInTheDocument();
    });
});

   

