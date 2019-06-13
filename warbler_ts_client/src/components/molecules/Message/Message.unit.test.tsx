import React from 'react';
import {render, cleanup} from 'react-testing-library';
import 'jest-dom/extend-expect';

// Component to test
import Message from '.';

// Fake data props
import {genMock} from '../../../../__mocks__/mockData';

afterEach(() => {
    cleanup();
});

describe('the Message component', () => {
    it('displays a photo if one is present on author prop', () => {
        const {mockData, hook} = genMock({mockType: 'message'});
        const {queryByTestId} = render(<Message {...mockData}/>);

        expect(queryByTestId('photo-avatar')).toBeInTheDocument();
        expect(queryByTestId('init-avatar')).not.toBeInTheDocument();
    });

    it('displays a letter avatar if no photo is available', () => {
        let message = genMock({mockType: 'message'}).mockData;
        message.author.photos = [];

        const {queryByTestId} = render(<Message {...message}/>);

        expect(queryByTestId('init-avatar')).toBeInTheDocument();
        expect(queryByTestId('photo-avatar')).not.toBeInTheDocument();
    });
});