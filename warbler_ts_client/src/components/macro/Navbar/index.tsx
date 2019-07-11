// Get React deps
import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {Link as RouterLink} from 'react-router-dom';

// Navbar lives in no particular route, so we need HOC
// to make history object available.
import {withRouter, RouteComponentProps} from 'react-router-dom';

// Type for entire redux state
import {RootState} from '../../../store/rootReducer';

// Network hook to handle signing out of api server
import {signOut} from '../../../utils/networkSvcs';

// Get Material UI deps
import {
    withStyles, 
    WithStyles,
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Typography,
    Link
} from '@material-ui/core';

import {Menu as MenuIcon} from '@material-ui/icons';


// Get custom styles object
import styles from './styles';

interface Props extends RouteComponentProps, WithStyles<typeof styles> {
    user: RootState['user'],
    dispatch: Dispatch
};

// Export unconnected component for ease of testing
export const Navbar: React.FC<Props> = ({classes, user, history, dispatch}) => {
    // const renderButtons = (authStatus: boolean) => {
    //     return authStatus ?
    //             <Button 
    //                 onClick={() => signOut(dispatch)} 
    //                 variant='contained'
    //                 color='primary'
    //             >
    //                 signout
    //             </Button>
    //         :
    //             <Button onClick={() => history.push('/signin')} variant='contained' color='primary'>signin</Button>
    // };

	return(
            <AppBar className={classes.root}>
                <Toolbar >
                    <IconButton aria-label="Menu">
                        <MenuIcon />
                    </IconButton>

                    <Link component={RouterLink} to='/'>
                        <Typography variant="h6" color='textPrimary'>
                            SongByrd
                        </Typography>
                    </Link>
                    
                </Toolbar>
            </AppBar>
    );
};

const mapStateToProps = (state: RootState) => ({
    user: state.user
});

export default withStyles(styles)(connect(mapStateToProps)(withRouter(Navbar)));
