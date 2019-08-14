import React, { FunctionComponent } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { ReactComponent as Logo } from "../../assets/songbyrd.svg";

import { API_URL } from "../../CONSTANTS";

function MadeWithLove() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Built with love by the "}
            <Link color="inherit" href="https://material-ui.com/">
                Material-UI
            </Link>
            {" team."}
        </Typography>
    );
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: "100vh"
        },
        image: {
            backgroundColor: theme.palette.primary.main,
            display: "grid",
            justifyContent: "center",
            alignContent: "center"
        },
        paper: {
            margin: theme.spacing(8, 4),
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main
        },
        form: {
            width: "100%", // Fix IE 11 issue.
            marginTop: theme.spacing(1)
        },
        submit: {
            margin: theme.spacing(2, 0, 2)
        },
        logo: {
            transform: "translateY(-4rem)",
            maxWidth: "100%"
        },
        authLink: {
            "&:hover": {
                textDecoration: "none"
            }
        }
    })
);

interface Props {}

const Landing: FunctionComponent<Props> = (props) => {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <Grid
                container
                item
                xs={false}
                sm={4}
                md={6}
                className={classes.image}
            >
                <Logo className={classes.logo} />
            </Grid>
            <Grid
                item
                xs={12}
                sm={8}
                md={6}
                component={Paper}
                elevation={6}
                square
            >
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Link
                            component="a"
                            href={API_URL + "auth/google"}
                            color="inherit"
                            className={classes.authLink}
                        >
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                {" "}
                                Sign In With Google
                            </Button>
                        </Link>

                        <Link
                            component="a"
                            href={API_URL + "auth/facebook"}
                            color="inherit"
                            className={classes.authLink}
                        >
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                {" "}
                                Sign In With Facebook
                            </Button>
                        </Link>

                        <Link
                            component="a"
                            href={API_URL + "auth/signout"}
                            color="inherit"
                            className={classes.authLink}
                        >
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                {" "}
                                Sign Out
                            </Button>
                        </Link>

                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="Remember me"
                        />
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <MadeWithLove />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
};

export default Landing;
