import React from 'react';
import App from '.';
import {render, cleanup} from 'react-testing-library';

afterEach(cleanup);

test('App renders without crashing', () => {
	const {getByText} = render(<App />);

	
});