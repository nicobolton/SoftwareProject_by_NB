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
import axios from 'axios';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
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

export default function AddProducto() {
    const classes = useStyles();
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [brand, setBrand] = useState("");
    const [description, setDescription] = useState("");
    const [id_categoria, setIDCategoria] = useState("");
    const [stock_pro, setStock] = useState("");
    const [loading, setLoading] = useState(false);
    const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dwdylxe2v/image/upload';
    const CLOUDINARY_UPLOAD_PRESET = 'yrgvysul';
    const imagePreview = document.getElementById('img-preview');
    const imageUploader = document.getElementById('imagen');


    function validateForm() {
        return id_categoria.length > 0 && stock_pro.length > 0 && brand.length > 0 && name.length > 0 && price.length > 0 && description.length > 0;
    }

    async function ActualizarCredenciales() {
        if (!loading) {
            setLoading(true);
            fetch('http://localhost:4000/api/agregarProducto', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    imagen: image,
                    nombre: name,
                    ID_CATEGORIA: id_categoria,
                    marca: brand,
                    descripcion: description,
                    precio: price,
                    stock: stock_pro
                }),
            })
                .then((response) => response.json())
                .then(async (json) => {
                    if (validateForm) {
                        alert("Se ingreso el nuevo producto!");
                    } else {
                        alert("No se a registrado el producto");
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

    /* imageUploader.addEventListener('change', async (e) => {
         const file = e.target.files[0];
         const formData = new FormData();
         formData.append('file', file);
         formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
 
         const res = await axios.post(CLOUDINARY_URL, formData, {
             headers: {
                 'Content-Type': 'multipart/form-data'
             }
 
         });
         imagePreview.src = res.data.secure_url;
     });*/


    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>

                <Typography component="h1" variant="h5">
                    Agregar Producto
                </Typography>
                <div>
                    <img style={{ widht: "160px", heigh: "160px", borderRadius: "80px" }} id="img-preview"

                    />
                </div>
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <input
                                value={image}
                                onChange={e => setImage(e.target.value)}
                                name="imagen"
                                type="file"
                                variant="outlined"
                                fullWidth
                                id="imagen"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={name}
                                onChange={e => setName(e.target.value)}
                                autoComplete="nombre"
                                name="nombre"
                                variant="outlined"
                                fullWidth
                                id="nombre"
                                label="Nombre del Producto"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={id_categoria}
                                onChange={e => setIDCategoria(e.target.value)}
                                variant="outlined"
                                fullWidth
                                type="number"
                                id="name"
                                label="Categoria del producto"
                                name="name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={brand}
                                onChange={e => setBrand(e.target.value)}
                                autoComplete="marca"
                                name="marca"
                                variant="outlined"
                                fullWidth
                                id="marca"
                                label="Marca del Producto"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                variant="outlined"
                                fullWidth
                                name="Descripcion"
                                label="Descripcion del producto"
                                id="description"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                                variant="outlined"
                                type="number"
                                fullWidth
                                name="precio"
                                label="Precio del producto"
                                id="precio"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={stock_pro}
                                onChange={e => setStock(e.target.value)}
                                variant="outlined"
                                type="number"
                                fullWidth
                                name="stock"
                                label="Stock del producto"
                                id="stock"
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
                        Agregar
                    </Button>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}