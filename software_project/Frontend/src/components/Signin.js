import React, { useState } from 'react';
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
import { Link as RouteLink } from 'react-router-dom';




function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Via Salud LTD
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const[emailuser, setEmail] = useState("");
    const[password, setPass] = useState("");
    const[loading, setLoading] = useState(false);

    function validateForm() {
        return emailuser.length > 0 && password.length > 0;
      }
    
      async function singIn(){
        if(!loading){
          setLoading(true);
          fetch('http://localhost:4000/api/login', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: emailuser,
              pass: password
            }),
          })
            .then((response) => response.json())
            .then(async (json) => {
              if(json.status){
                localStorage.setItem('token', json.token);
                setLoading(false);
                window.location.href = "/";
              } else{
                alert("fallo el inicio de sesion")
              }
            })
            .catch((error) => {
              console.error(error);
            });
          setLoading(false);
        }
      }
    
      function handleSubmit(event) {
        singIn();
        event.preventDefault();
      }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar sesión
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
            value={emailuser}
            onChange={(e) => setEmail(e.target.value)}
            controlId="username"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo electrónico"

            autoComplete="email"
            autoFocus
          />
          <TextField
            value={password}
            onChange={(e) => setPass(e.target.value)}
            controlId="password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recordarme"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!validateForm()}
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                ¿Olvido su contraseña?
              </Link>
            </Grid>
            <Grid item>
              <RouteLink to="signup">
                {"¿No tiene una cuenta? Registrese"}
              </RouteLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}