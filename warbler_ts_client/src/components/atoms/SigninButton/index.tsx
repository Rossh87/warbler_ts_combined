import React from 'react';

import {
    Theme,
    WithStyles,
    withStyles,
    createStyles,
    Button,
    Grid,
    Typography
} from '@material-ui/core';
import classes from '*.module.sass';

// Styles begin here
const styles = (theme: Theme) => createStyles({
    root: {
        border: '1px solid ' + theme.palette.primary.main,
        backgroundColor: 'transparent'
    },
    buttonGrid: {
        margin: 0,
        padding: 0,
    },
    textGrid: {
        backgroundColor: theme.palette.primary.light,
        margin: 0,
        padding: 0
    },
    iconGrid: {
        margin: 0,
        padding: 0
    }
});

// Add index signature to catch any passthrough props
interface Props extends WithStyles<typeof styles> {
    provider: 'google' | 'facebook',
    [prop: string]: any
};

const SigninButton: React.FC<Props> = ({provider, classes, ...restProps}) => {
    return (
        <Button {...restProps} className={classes.root} component={'a'} href={`http://localhost:8001/signin/${provider}`}>
            <Grid className={classes.buttonGrid} container>
                <Grid className={classes.iconGrid} item xs={3}>(Pic)</Grid>
                <Grid className={classes.textGrid} item xs={9}>
                        Sign In With Google
                </Grid>
            </Grid>
        </Button>

    );
};

export default withStyles(styles)(SigninButton);
