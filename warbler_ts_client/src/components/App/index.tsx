import React from 'react'
import Navbar from '../Navbar';
import AuthModal from '../AuthModal';

const App = () => {
	return(
		<React.Fragment>
			<Navbar />
			<button>
				<a href='http://localhost:8001/auth/google'>Browser Gauth</a>
			</button>
		</React.Fragment>
		
	)
}
export default App;