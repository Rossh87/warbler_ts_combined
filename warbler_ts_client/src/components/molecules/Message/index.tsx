import React from 'react';

// Get UI deps
import {Grid, Typography, Paper, Avatar, withStyles, WithStyles} from '@material-ui/core';

// Local styles
import styles from './styles';

// Type for message prop
import {IMessage} from '../../../store/messages/messagesTypes';

// Get local components
import PhotoAvatar from '../../atoms/PhotoAvatar';

interface Props extends IMessage, WithStyles<typeof styles> {

}

const Message: React.FC<Props> = ({text, author, classes}) => {
    return(
        <Grid item xs={8} className={classes.root}>
            <Paper>
                <Grid container >
                    <Grid item xs={2}>
                        <PhotoAvatar {...author}/>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography>
                            {author.displayName}
                        </Typography>
                        {text}
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
};

export default withStyles(styles)(Message);