import React from 'react'
import {Route, Switch} from 'react-router-dom';

// Local components
import Navbar from '../Navbar';
import AuthModal from '../AuthModal';
import Landing from '../Landing';
import Main from '../Main';

const App: React.FC = () => {
	return(
		<React.Fragment>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route path='/signin' component={AuthModal} />
				<Route path='/user/:id' component={AuthModal} />
			</Switch>
		</React.Fragment>
		
	)
}
export default App;