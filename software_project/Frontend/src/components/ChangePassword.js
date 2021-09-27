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

export default function CambiarPassword() {
    const classes = useStyles();
    const [password, setPassword] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [newpasswordverify, setNewPasswordverify] = useState("");
    const [loading, setLoading] = useState(false);

    /*no necesita un wait :c?*/
    function validateForm() {
        return password.length > 0 && newpassword.length > 0 && newpasswordverify.length > 0;
    }

    async function ActualizarCredenciales() {
        if (!loading) {
            setLoading(true);
            fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    pass: password,
                    newpass: newpassword,
                    newpassv: newpasswordverify
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
        ActualizarCredenciales();
        event.preventDefault();
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>

                <Typography component="h1" variant="h5">
                    Cambiar Contraseña
                </Typography>
                <div>
                    <img style={{ widht: "160px", heigh: "160px", borderRadius: "80px" }}
                        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    />
                </div>
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                autoComplete="password"
                                name="password"
                                variant="outlined"
                                fullWidth
                                id="password"
                                label="Contraseña actual"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={newpassword}
                                onChange={e => setNewPassword(e.target.value)}
                                variant="outlined"
                                fullWidth
                                id="email"
                                label="Nueva Contraseña"
                                name="new password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={newpasswordverify}
                                onChange={e => setNewPasswordverify(e.target.value)}
                                variant="outlined"
                                fullWidth
                                name="verificando contraseña"
                                label="Repetir contraseña nueva"
                                id="verify password"
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
                        onClick={ActualizarCredenciales}
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