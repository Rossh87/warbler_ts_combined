import React from 'react';
import Navbar from '.';
import {render, ProviderRoot, cleanup, fireEvent} from '../../../utils/testUtils';
import { Provider } from 'react-redux';
import {withRouter} from 'react-router-dom';

const mockAuthorizedState = {
    user: {
        isAuthorized: true
    }
}

const mockUnauthorizedState = {
    user: {
        isAuthorized: false
    }
};

afterEach(() => {
    cleanup();
});

describe('The UI component AppBar', () => {
    it('shows "signup" and "signin" if user is not authorized', () => {
        const {getByText} = render(<ProviderRoot mockStore={mockUnauthorizedState}><Navbar/></ProviderRoot>);
        expect(getByText('signin')).not.toBe(null);
    });

    it('shows logout message if user is authorized', () => {
        const {getByText} = render(<ProviderRoot mockStore={mockAuthorizedState}><Navbar/></ProviderRoot>);

        expect(getByText('signout')).not.toBe(null);
    });
});