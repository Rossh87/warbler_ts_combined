// Get React deps
import React from 'react';
import {connect, DispatchProp} from 'react-redux';
import {compose, Dispatch} from 'redux';

// Navbar lives in no particular route, so we need HOC
// to make history object available.
import {withRouter, RouteComponentProps} from 'react-router-dom';

// Type for entire redux state
import {RootState} from '../../store/rootReducer';

import {signOut} from '../../utils/networkSvcs';

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
            <Button onClick={() => signOut(dispatch)} color='inherit' variant='contained'>
                <a href = 'http://localhost:8001/auth/signout'>Signout</a>
            </Button>
            :
            <div>                
                <Button onClick={() => history.push('/signin')} variant='contained' color='inherit'>signin</Button>
            </div>
    };
	return(
        
        <div className={classes.root}>
            <AppBar>
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                    Warbler
                    </Typography>
                    {renderButtons(user.isAuthorized)}
                    <Button onClick={() => history.push('/messages/new')}>
                        Create Message
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

const mapStateToProps = (state: RootState) => ({
    user: state.user
});

export default withStyles(styles)(connect(mapStateToProps)(withRouter(Navbar)));
