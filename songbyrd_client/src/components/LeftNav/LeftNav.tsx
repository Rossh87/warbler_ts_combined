import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../CONSTANTS";

// MUI deps
import theme from "../../muiTheme";
import { createStyles, makeStyles, WithStyles } from "@material-ui/styles";
import {
    Theme,
    Grid,
    ListItem,
    ListItemIcon,
    List,
    ListItemText,
    Typography
} from "@material-ui/core";

// Icons
import HomeOutlined from "@material-ui/icons/HomeOutlined";
import ExploreOutlined from "@material-ui/icons/ExploreOutlined";
import NotificationsOutlined from "@material-ui/icons/NotificationsOutlined";
import EmailOutlined from "@material-ui/icons/EmailOutlined";
import BookmarkBorder from "@material-ui/icons/BookmarkBorder";
import PersonOutline from "@material-ui/icons/PersonOutline";
import CancelOutlined from "@material-ui/icons/CancelOutlined";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flex: "1",
            justifyContent: "flex-end",
            padding: theme.spacing(1),
            position: "sticky",
            alignSelf: "flex-start",
            top: "0px"
        },

        inner: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start"
        },

        icon: {
            padding: theme.spacing(1, 2)
        },

        button: {
            width: "100%",
            justifyContent: "flex-start",
            borderRadius: "30%/90%"
        },

        link: {
            textDecoration: "none"
        }
    })
);

const LeftNav: FunctionComponent = (props) => {
    const classes = useStyles();
    return (
        <Grid xs={3} container item className={classes.root}>
            <List component="nav" className={classes.inner}>
                <ListItem
                    button
                    className={classes.button}
                    to="/home"
                    component={Link}
                >
                    <ListItemIcon>
                        <HomeOutlined
                            className={classes.icon}
                            fontSize="large"
                        />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="h6">Home</Typography>
                    </ListItemText>
                </ListItem>

                <ListItem
                    button
                    className={classes.button}
                    to="/"
                    component={Link}
                >
                    <ListItemIcon>
                        <ExploreOutlined
                            className={classes.icon}
                            fontSize="large"
                        />
                    </ListItemIcon>

                    <ListItemText>
                        <Typography variant="h6">Explore</Typography>
                    </ListItemText>
                </ListItem>

                <ListItem
                    button
                    className={classes.button}
                    to="/notifications"
                    component={Link}
                >
                    <ListItemIcon>
                        <NotificationsOutlined
                            className={classes.icon}
                            fontSize="large"
                        />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="h6">Notifications</Typography>
                    </ListItemText>
                </ListItem>

                <ListItem
                    button
                    className={classes.button}
                    to="/"
                    component={Link}
                >
                    <ListItemIcon>
                        <EmailOutlined
                            className={classes.icon}
                            fontSize="large"
                        />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="h6">Messages</Typography>
                    </ListItemText>
                </ListItem>

                <ListItem
                    button
                    className={classes.button}
                    to="/"
                    component={Link}
                >
                    <ListItemIcon>
                        <BookmarkBorder
                            className={classes.icon}
                            fontSize="large"
                        />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="h6">Bookmarks</Typography>
                    </ListItemText>
                </ListItem>

                <ListItem
                    button
                    className={classes.button}
                    to="/profile"
                    component={Link}
                >
                    <ListItemIcon>
                        <PersonOutline
                            className={classes.icon}
                            fontSize="large"
                        />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="h6">Profile</Typography>
                    </ListItemText>
                </ListItem>

                <ListItem
                    button
                    className={classes.button}
                    href={`${API_URL}auth/signout`}
                    component={"a"}
                >
                    <ListItemIcon>
                        <CancelOutlined
                            className={classes.icon}
                            fontSize="large"
                        />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="h6">Sign Out</Typography>
                    </ListItemText>
                </ListItem>
            </List>
        </Grid>
    );
};

export default LeftNav;
