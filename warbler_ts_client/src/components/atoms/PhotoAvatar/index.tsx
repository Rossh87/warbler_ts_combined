import React from 'react';

// Get UI deps
import {Avatar, withStyles, WithStyles} from '@material-ui/core';

// Local styles
import styles from './styles';

// Types for prop data
import { IAuthorProp } from '../../../store/messages/messagesTypes';
import {UserState} from '../../../store/user/userTypes';

interface MessageProps extends WithStyles<typeof styles>, IAuthorProp {
    
}

interface UserProps extends WithStyles<typeof styles>, UserState {
    
}

// component accepts a generic user object (typeof either redux 'user' state, or a redux 'message' 'author' property)
const PhotoAvatar: React.FC<MessageProps | UserProps> = ({photos, displayName}) => {
    
    // If user has a photo on file, use it.  Otherwise, use first initial of
    // displayName.
    const determineAvatar = (): React.ReactElement => {
        const firstInit = displayName.slice(0,1);

        return photos.length ?
            <Avatar src={photos[0].value} data-testid='photo-avatar'/>
            :
            <Avatar data-testid='init-avatar'>{firstInit}</Avatar>
    };

    return(
        <React.Fragment>
            {determineAvatar()}
        </React.Fragment>
    );
};

export default withStyles(styles)(PhotoAvatar);