import React from 'react';

// Get UI deps
import {Grid, Typography, Paper, Avatar, withStyles, WithStyles} from '@material-ui/core';

// Local styles
import styles from './styles';

// Type for message prop
import {IMessage} from '../../store/messages/messagesTypes';

interface Props extends IMessage, WithStyles<typeof styles> {

}

const Message: React.FC<Props> = ({text, author, classes}) => {
    // If message author has a photo on file, use it.  Otherwise, use first initial of
    // displayName.
    const determineAvatar = (author: Props['author']): React.ReactElement => {
        const firstInit = author.displayName.slice(0,1);

        return author.photos.length ?
            <Avatar src={author.photos[0].value} />
            :
            <Avatar>{firstInit}</Avatar>
    };

    return(
        <Grid item xs={8} className={classes.root}>
            <Paper>
                <Grid container >
                    <Grid item xs={2}>
                        {determineAvatar(author)}
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