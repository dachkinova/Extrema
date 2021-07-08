
import React, { useEffect, useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Register from "./Register"; 
import {
    BrowserRouter as Router, 
    Switch, 
    Route
} from 'react-router-dom';
import {RegisterButton} from './NavButtons';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// const submitValue = () => {
//   const details = {
//       'Username' : name,
//       'Password' : pass
//   }
//   console.log(details);
// }

let textInputUsername = React.createRef();

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
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function Login() {
  let history = useHistory();
  const classes = useStyles();

  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  const submitHandler = (event) => {
    
    event.preventDefault();
    const enteredName = name;
    const enteredPassword = pass;

    getUserInfo();
    
      axios({
        method: 'post',
        url: '/api/users/login',
        data: {
          username: enteredName, 
          password: enteredPassword
        }
      }).then(res => {
        if(res.status === 200) {
          history.push("/");
        }
    }).catch(e => 
      console.error(e)
      );
      
  };
  const [data, setData] = useState();
  const [loggedIn, setLoggedIn] = useState();

  const getUserInfo = () => {
    axios.get('/api/users/profile').then((res) => {
        if(res.data.username) {
            setData(res.data.username);
            sessionStorage.setItem('loggedIn', 'true');
            setLoggedIn(true);
            sessionStorage.setItem('user', JSON.stringify(res.data));
        }
    });
}

  const setPassword = (e) => {
    setPass(e.target.value);
  }

  const setUsername = (e) => {
    setName(e.target.value);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            onChange={setUsername}
            ref={textInputUsername}
            value={name}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            onChange={setPassword}
            value={pass}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            onClick={submitHandler}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <RegisterButton/>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}

export {Login};