import React from 'react';

// Export bare component (w/out HOCs) to facilitate unit
// testing.  Network/dispatch calls can be made in extractable units
// with their own unit tests.
export const Main = props => {
    return(
        <div>This is the main component</div>
    );
};