import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as RouterLink } from 'react-router-dom';
import customAxios from './customAxios';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Signup() {
    const classes = useStyles();
    const [signupData, setData] = useState({
        usrId: '',
        usrEml: '',
        usrNm: '',
        usrTel: '',
        usrBrtDt: '',
        usrPwd: ''        
    });
    const onChange = (e) =>{
        const {name, value} = e.target
        const nextData = {
            ...signupData,
            [name]: value,
        }
        setData(nextData)
    }
    function callback(signupResult){
        console.log(signupResult);
    }
    const onClick = () =>{
        customAxios('users', 'post', callback, signupData)
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
        </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="usrId"
                                name="usrId"
                                variant="outlined"
                                required
                                fullWidth
                                id="usrId"
                                label="User ID"
                                autoFocus
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="usrEml"
                                label="Email Address"
                                name="usrEml"
                                autoComplete="usrEml"
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="usrNm"
                                label="Use Name"
                                name="usrNm"
                                autoComplete="usrNm"
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="usrTel"
                                label="Tel."
                                name="usrTel"
                                autoComplete="usrTel"
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="usrBrtDt"
                                label="date of birth ex) 901230"
                                id="usrBrtDt"
                                autoComplete="usrBrtDt"
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="usrPwd"
                                label="Password"
                                type="password"
                                id="usrPwd"
                                autoComplete="usrPwd"
                                onChange={onChange}
                            />
                        </Grid>
                        {/**
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password Confirm"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                         */}

                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={onClick}
                    >
                        Sign Up
          </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <RouterLink to='login'>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
              </Link>
                            </RouterLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}
