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
//import { auth } from '../firebase';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit">
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
/* DESDE AQUI ES IMPORTANTE, ANTES PURA MIERDA */
export default function SignUp() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [emailuser, setEmailuser] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  function validateForm() {
    return username.length > 0 && emailuser.length > 0 && password.length > 0 && phone.length > 0;
  }

  async function singUp(){
    if(!loading){
      setLoading(true);
      fetch('http://localhost:4000/api/registro', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: username,
            email: emailuser,
            pass: password,
            tel: phone
        }),
      })
        .then((response) => response.json())
        .then(async (json) => {
          if(json.status){
            alert("Registrado con exito!");
          } else{
            alert("Registrado");
          }
        })
        .catch((error) => {
          console.error(error);
        });
      setLoading(false);
    }
  }

  function handleSubmit(event) {
    singUp()
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
          Registrarse
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField
            value={username}
            onChange={e => setUsername(e.target.value)}
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="Nombre y Apellido"
            autoFocus
        />
            </Grid>
            <Grid item xs={12}>
            <TextField
                value={emailuser}
                onChange={e => setEmailuser(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Correo electrónico"
                name="email"
                autoComplete="email"
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                value={password}
                onChange={e => setPassword(e.target.value)}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                value={phone}
                onChange={e => setPhone(e.target.value)}
                variant="outlined"
                required
                fullWidth
                name="telefono"
                label="Telefono"
                id="phone"
            />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Me gustaría recibir ofertas a través del correo electrónico."
              />
            </Grid>
          </Grid>
          <Button
            disabled={!validateForm()}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrarse
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <RouteLink to="signin">
                ¿Ya tienes una cuenta? Inicia sesion
              </RouteLink>
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