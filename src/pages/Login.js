import React from 'react';
import { makeStyles, Grid, Typography, CssBaseline, Paper, TextField, FormControlLabel, Checkbox, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh'
    },
    teste: {
        backgroundColor: '#ff0000',
    },
    teste2: {
        backgroundColor: '#d3d400'
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(35, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },

}));

export default function Login() {
    const classes = useStyles();

    //Grid = Básicamente uma Div que tem um container como propriedade, além de ser flexivel 
    //TextField = Básicamente o input do material-ui

    return (
        <Grid container component="main" className={classes.root}>
            <Grid container xs={12}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} />

                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="Password"
                                name="password"
                                type="password"
                            />

                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label="Remember me"
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
                            </Button>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
}