import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CambiarDatos() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  /*no necesita un wait :c?*/ 
  function validateForm() {
    return username.length > 0 && email.length > 0 && phone.length > 0;
  }

  async function ActualizarDatosUsuario() {
    if (!loading) {
      setLoading(true);
      fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: username,
          email: email,
          tel: phone
        }),
      })
        .then((response) => response.json())
        .then(async (json) => {
          if (json.status) {
            alert("Datos actualizados con exito!");
          } else {
            alert("Fallo el registro de datos :(");
          }
        })
        .catch((error) => {
          console.error(error);
        });
      setLoading(false);
    }
  }

  function handleSubmit(event) {
    ActualizarDatosUsuario();
    event.preventDefault();
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        <Typography component="h1" variant="h5">
          Cambiar datos de Usuario
        </Typography>
        <div>
          <img style={{widht:"160px",heigh:"160px",borderRadius:"80px"}}
          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={username}
                onChange={e => setUsername(e.target.value)}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                fullWidth
                id="firstName"
                label="Nombre y Apellido"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={email}
                onChange={e => setEmail(e.target.value)}
                variant="outlined"
                fullWidth
                id="email"
                label="Correo electrónico"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={phone}
                onChange={e => setPhone(e.target.value)}
                variant="outlined"
                fullWidth
                name="telefono"
                label="Telefono"
                id="phone"
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
            onClick={ActualizarDatosUsuario}
          >
            Actualizar
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}