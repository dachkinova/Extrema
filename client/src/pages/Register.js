
import React, {useState}  from 'react';
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
import {
    BrowserRouter as Router, 
    Switch, 
    Route
} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  const classes = useStyles();
  let history = useHistory();

  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');

  const submitFunc = () => {
    axios.post('/api/users/login', {
      username: name, 
      password: pass, 
      email: email
    }).then ((res)=> {
      console.log(res);
      history.push("/");
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registration
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            onChange={e => setName(e.target.value)}
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
            onChange={e => setEmail(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            type="email"
            id="email"
          />
          <TextField
            onChange={e => setPass(e.target.value)}
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
            onCLick={submitFunc}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Make a registration
          </Button>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}

<Route path="/register" component={Register} />
export {Register};