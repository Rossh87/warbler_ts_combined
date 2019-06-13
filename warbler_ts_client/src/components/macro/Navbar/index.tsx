// Get React deps
import React from 'react';
import {connect, DispatchProp} from 'react-redux';
import {compose, Dispatch} from 'redux';

// Navbar lives in no particular route, so we need HOC
// to make history object available.
import {withRouter, RouteComponentProps} from 'react-router-dom';

// Type for entire redux state
import {RootState} from '../../../store/rootReducer';

import {signOut} from '../../../utils/networkSvcs';

// Get Material UI deps
import AppBar from '@material-ui/core/Toolbar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import {withStyles, WithStyles} from '@material-ui/core/styles';

// Get custom styles object
import styles from './styles';

interface Props extends RouteComponentProps, WithStyles<typeof styles> {
    user: RootState['user'],
    dispatch: Dispatch
};

// Export unconnected component for ease of testing
export const Navbar: React.FC<Props> = ({classes, user, history, dispatch}) => {
    const renderButtons = (authStatus: boolean) => {
        return authStatus ?
                <Button 
                    onClick={() => signOut(dispatch)} 
                    variant='contained'
                    color='primary'
                >
                    signout
                </Button>
            :
                <Button onClick={() => history.push('/signin')} variant='contained' color='primary'>signin</Button>
    };

	return(
            <AppBar className={classes.root}>
                <Toolbar >
                    <IconButton aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color='textPrimary'>
                        Warbler
                    </Typography>
                    
                </Toolbar>

                {renderButtons(user.isAuthorized)}
            </AppBar>
    );
};

const mapStateToProps = (state: RootState) => ({
    user: state.user
});

export default withStyles(styles)(connect(mapStateToProps)(withRouter(Navbar)));
