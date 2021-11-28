import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete'
import { useState, useEffect } from 'react';
// import './fotos'

// creamos el formato para el dinero, además aproxima valores (caso de trabajar dolares)
var formatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
});


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,

    },
    action: {
        marginTop: "3rem",
    },
    media: {
        height: 100,
        paddingTop: '56.25%',
        display: 'flex',
    },
    cardActions: {
        display: "flex",
        justifyContent: "right",
        textAlign: "center",
    },
}));


export default function CheckoutCard({ product: { id_producto, imagen, nombre, id_categoria, marca, descripcion, precio, stock } }) {
    const classes = useStyles();
    const [data, setData] = useState([]);

    useEffect(() => {
        const getProductos = async () => {
            fetch("http://localhost:4000/api/producto")
                .then(response => response.json())
                .then(value => {
                    setData(value);
                    console.log(data)
                    //var foto = Base64.getEncoder().encodeToString(data.imagen);
                });
        };
        getProductos().catch(null);
    }, []);

    function xd(id) {
        localStorage.setItem('id_producto', id.target.getAttribute('value'))
        window.location.href = "#"
    }

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                action={
                    <Typography className={classes.action} variant='h5' color='textSecondary'>
                        {formatter.format(precio)}
                    </Typography>
                }
                title={nombre}
                subheader={"Stock: " + stock}
            />
            <CardMedia
                className={classes.media} //da el estilo a la wea
                height="300px"
                width="300px"
                image={imagen}
                title="productos"
            />

            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton>
                    <DeleteIcon fontSize="large" align="right" />
                </IconButton>
            </CardActions>
        </Card>
    );
}