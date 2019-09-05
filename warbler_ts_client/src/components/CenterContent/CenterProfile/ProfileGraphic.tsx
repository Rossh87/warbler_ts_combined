import React, { FunctionComponent } from "react";
import { IUserState } from "../../../store/user/userTypes";

// date formatting util
import { format, parseISO } from "date-fns";

// MUI deps
import { createStyles, makeStyles, WithStyles } from "@material-ui/styles";
import { Theme, Grid, Button, Typography } from "@material-ui/core";

// local components
import UserAvatar from "../../UserAvatar";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: 400
        },

        topRectangle: {
            backgroundColor: theme.palette.primary.dark,
            height: "50%"
        },

        bottomRectangle: {
            height: "50%",
            backgroundColor: "none",
            padding: theme.spacing(1)
        },

        userAvatar: {
            border: "5px solid white",
            transform: "translatey(60%)",
            width: 130,
            height: 130,
            margin: theme.spacing(2)
        }
    })
);

interface Props {
    profileInfo: IUserState;
}

const ProfileGraphic: FunctionComponent<Props> = ({ profileInfo }) => {
    const classes = useStyles();

    return (
        <Grid className={classes.root} container item>
            <Grid item container className={classes.topRectangle}>
                <UserAvatar className={classes.userAvatar} />
            </Grid>

            <Grid
                direction="column"
                item
                container
                className={classes.bottomRectangle}
            >
                <Grid item container direction="row" justify="flex-end">
                    <Button>Edit profile</Button>
                </Grid>

                <Grid direction="column" container item>
                    <Typography variant="h6">
                        {profileInfo.displayName}
                    </Typography>
                    <Typography variant="subtitle1">
                        Joined {format(parseISO(profileInfo.createdAt), "PPP")}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default ProfileGraphic;
