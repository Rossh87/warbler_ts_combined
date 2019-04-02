import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App/index';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.render(<App message='some message' count={2} />, root);