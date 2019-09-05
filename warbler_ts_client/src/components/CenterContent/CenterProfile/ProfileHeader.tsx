import React, { FunctionComponent, forwardRef } from "react";
import { Link, LinkProps } from "react-router-dom";
// MUI deps
import { createStyles, makeStyles, WithStyles } from "@material-ui/styles";
import { Theme, Grid, IconButton, Typography } from "@material-ui/core";
import { KeyboardBackspace } from "@material-ui/icons";

// local components

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(1)
        }
    })
);

interface Props {
    displayName: string;
}

const RouterLink = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
    return <Link innerRef={ref as any} {...props} />;
});

const ProfileHeader: FunctionComponent<Props> = ({ displayName }) => {
    const classes = useStyles();
    return (
        <Grid className={classes.root} item container>
            <IconButton size="medium" component={RouterLink} to="/home">
                <KeyboardBackspace />
            </IconButton>

            <div>
                <Typography variant="h6">{displayName}</Typography>
            </div>
        </Grid>
    );
};
export default ProfileHeader;
