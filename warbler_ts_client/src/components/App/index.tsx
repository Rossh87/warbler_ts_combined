import React from 'react'
import {Route, Switch} from 'react-router-dom';

// Local components
import Navbar from '../Navbar';
import AuthModal from '../AuthModal';
import Landing from '../Landing';
import Main from '../Main';
import MessageForm from '../MessageForm';

const App: React.FC = () => {
	return(
		<React.Fragment>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route path='/signin' component={AuthModal} />
				<Route path='/users/:id' component={Main} />
				<Route path='/messages/new' component={MessageForm} />
			</Switch>
		</React.Fragment>
		
	)
}
export default App;