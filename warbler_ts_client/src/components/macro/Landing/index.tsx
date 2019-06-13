import React from 'react';

// This component serves only as the landing page.
// User redirected to 'Main' component upon successful auth.  Main
// makes initial network request to populate Redux state.
const Landing: React.FC = props => {
    return(
        <p>This is the landing page</p>
    )
};

export default Landing;