import React from 'react';
import {Navbar} from '.';
import {render, cleanup} from 'react-testing-library';

afterEach(() => {
    cleanup();
});

describe('The UI component AppBar', () => {
    it('shows "signup" and "signin" if user is not authorized', () => {
        const {getByText} = render(<Navbar user={{isAuthorized: false}} />);

        expect(getByText('SIGNUP')).not.toBe(null);
        expect(getByText('SIGNIN')).not.toBe(null);
    });

    it('shows logout message if user is authorized', () => {
        const {getByText} = render(<Navbar user={{isAuthorized: true}} />);

        expect(getByText('LOGOUT')).not.toBe(null);

        expect(getByText('SIGNUP')).toBe(null);
        expect(getByText('SIGNIN')).toBe(null);
    });
});