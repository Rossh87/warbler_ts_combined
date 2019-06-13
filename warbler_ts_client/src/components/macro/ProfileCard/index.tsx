import React from 'react';

// MUI deps
import {WithStyles, withStyles} from '@material-ui/core';

// type for user prop
import {UserState} from '../../../store/user/userTypes';

// local styles
import styles from './styles';

interface Props extends UserState, WithStyles<typeof styles> {

}

const ProfileCard: React.FC<Props> = (props) => {
    
}

export default withStyles(styles)(ProfileCard);