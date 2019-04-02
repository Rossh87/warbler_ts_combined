import React from 'react';
import App from '.';
import {render, cleanup} from 'react-testing-library';

afterEach(cleanup);

test('App renders without crashing', () => {
	const props = {
		message: 'someting',
		count: 1
	};

	const {container, getByText} = render(<App {...props} />);

	const greeting = getByText(props.message, {exact: false});
	expect(greeting).not.toBe(undefined);
});