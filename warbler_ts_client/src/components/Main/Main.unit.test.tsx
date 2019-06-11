import React from 'react';
import {render, cleanup, queryByText} from '../../utils/testUtils';
import {Main} from './index';
import 'jest-dom/extend-expect';

const mockMsgs = [
    {
        text: 'text1',
        _id: '123'
    },
    {
        text: 'text2',
        _id: '456'
    }
];

describe('The Main UI component', () => {
    it('renders an element for each message in its props', () => {
        const {queryByText} = render(<Main messages={mockMsgs} dispatch={jest.fn()}/>);

        mockMsgs.forEach((msg) => {
            expect(queryByText(msg.text)).toBeInTheDocument();
        })
    });
})