import React from 'react';
import {render, cleanup} from '../../utils/testUtils';

// Get component for testing
import AuthModal from '.';

afterEach(() => cleanup());

describe('The AuthModal component', () => {
    it('shows a login button for Facebook, Google, and local', () => {
        let missing = '';
        const {getByText} = render(<AuthModal />);
        ['Sign In With Google', 'Sign In With Facebook', 'Sign In']
            .forEach(text => {
                if(!getByText(text)) {
                    missing += text
                }
            });
        expect(missing).toEqual('');
    });

    it('makes correct network request for Google Auth', () => {
        
    })
});