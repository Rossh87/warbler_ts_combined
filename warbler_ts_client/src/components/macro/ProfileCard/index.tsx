import React from 'react';

// MUI deps
import {WithStyles, withStyles, Grid, Paper} from '@material-ui/core';

// type for user prop
import {UserState} from '../../../store/user/userTypes';

// local styles
import styles from './styles';

// local components
import PhotoAvatar from '../../atoms/PhotoAvatar';

interface Props extends WithStyles<typeof styles> {
    user: UserState
}

const ProfileCard: React.FC<Props> = ({user, classes}) => {
    return(
        <Grid container item xs={3}>
            <Paper className={classes.paper}>
               <PhotoAvatar {...user}/>

            </Paper>
        </Grid>

    )
}

export default withStyles(styles)(ProfileCard);