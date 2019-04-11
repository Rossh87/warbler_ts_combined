import React from 'react'
import Navbar from '../Navbar';
import AuthModal from '../AuthModal';

const App = () => {
	return(
		<React.Fragment>
			<Navbar />
			<AuthModal somedata='astring' />
			<button>
				<a href='http://localhost:8001/auth/google'>Gauth</a>
			</button>
		</React.Fragment>
		
	)
}
export default App;