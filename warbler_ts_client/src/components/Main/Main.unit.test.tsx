import React from 'react';
import {render, cleanup, queryByText} from '../../utils/testUtils';
import {Main} from './index';
import 'jest-dom/extend-expect';

describe('The Main UI component', () => {
    it('renders w/out crashing', () => {
        const {queryByText} = render(<Main />);

        const exp = /main/i;
        expect(queryByText(exp)).toBeInTheDocument()
    });
})