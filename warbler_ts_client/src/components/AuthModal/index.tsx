import React from 'react';

// Get style dependencies
import { withStyles, WithStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

// Get custom styles object
import styles from './styles';

// Get type for history object
import {History} from 'history';

interface Props extends WithStyles<typeof styles> {
    history: History
};

const AuthModal: React.FC<Props> = ({history}) => {

    return(
        <Dialog onClose={() => history.goBack()} open>
            <DialogTitle>
                Choose Login Method
            </DialogTitle>
            <List>
                <ListItem 
                    button
                >
                    <a href='http://localhost:8001/auth/google' data-testid='googleSignin'>
                        <ListItemText primary={'Sign In With Google'} />
                    </a>
                </ListItem>
                <ListItem button>
                    <a href='http://localhost:8001/auth/facebook' data-testid='facebookSignin'>
                        <ListItemText primary={'Sign In With Facebook'} />
                    </a>
                </ListItem>
            </List>
        </Dialog>
    )
};

export default withStyles(styles)(AuthModal);