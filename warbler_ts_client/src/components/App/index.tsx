import * as React from 'react'

interface Props {
	message: string,
	count: number
}

function App(props: Props) {
	return (<h1>My message is {props.message}, {props.count} times</h1>);
}

export default App;