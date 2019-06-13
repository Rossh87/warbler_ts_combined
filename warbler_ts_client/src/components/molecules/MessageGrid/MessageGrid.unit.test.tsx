import React from 'react';
import {render, cleanup, queryByText} from '../../../utils/testUtils';
import 'jest-dom/extend-expect';

// Get mock message data
import {genMock} from '../../../../__mocks__/mockData';

// Component for testing
import MessageGrid from '.';

afterEach(() => {
    cleanup();
})

describe('the MessageGrid component', () => {
    it('renders a Message component for each message object in its props', () => {
        // mock up an array of messages
        const {mockData, hook} = genMock(
            {
                genArray: {
                    length: 5,
                    returnIndex: 3
                },

                mockType: 'message'
            }
        )

        const {queryAllByText, debug} = render(<MessageGrid messages={mockData} />);
        const res = queryAllByText(hook, {exact: false});
        expect(res.length).toEqual(mockData.length);
    })
})