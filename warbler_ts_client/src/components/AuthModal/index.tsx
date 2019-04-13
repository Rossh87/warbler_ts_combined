import React from 'react';

// Get style dependencies
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

import axios from 'axios';
// Get custom styles object
import styles from './styles';

interface Props extends WithStyles<typeof styles> {
    somedata: 'astring'
}

const AuthModal: React.FC<Props> = (props) => {
    return(
        <Dialog open>
            <DialogTitle>
                Choose Login Method
            </DialogTitle>
            <List>
                <ListItem 
                    button
                    onClick={() => {
                        const res = axios.get('http://localhost:8001/auth/google');
                        console.log(res);
                    }}
                >
                    <ListItemText primary={'Sign In With Google'}></ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText primary={'Sign In With Facebook'}></ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText primary={'Sign In'}></ListItemText>
                </ListItem>
            </List>
        </Dialog>
    )
};

export default withStyles(styles)(AuthModal);