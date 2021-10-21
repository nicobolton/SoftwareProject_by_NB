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

export default function DelProducto() {
    const classes = useStyles();
    const [IDPRODUCTODEL, setIDPRODUCTODEL] = useState("");
    // const [price, setPrice] = useState("");
    // const [description, setDescription] = useState("");
    // const [idcat, setIDCategoria] = useState("");
    // const [stock_pro, setStock] = useState("");
    const [loading, setLoading] = useState(false);

    function validateForm() {
        return IDPRODUCTODEL.lenght >0;
    }

    async function ActualizarCredenciales() {
        if (!loading) {
            setLoading(true);
            fetch('http://localhost:4000/api/modificarProducto', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ID_PRODUCTO: IDPRODUCTODEL
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
                    Eliminar Producto
                </Typography>
                <div>
                    <img style={{ widht: "160px", heigh: "160px", borderRadius: "80px" }} alt="Persona" 
                    src="https://vidanat.cl/wp-content/uploads/2019/01/calcio-magnesio-vitamina-c-y-d3.png"

                    />
                </div>
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                value={IDPRODUCTODEL}
                                onChange={e => setIDPRODUCTODEL(e.target.value)}
                                autoComplete="idProducto"
                                name="idProducto"
                                variant="outlined"
                                type="number"
                                fullWidth
                                id="nombre"
                                label="Ingrese el ID del Producto"
                                autoFocus
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