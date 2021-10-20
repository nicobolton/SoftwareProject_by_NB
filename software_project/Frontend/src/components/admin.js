import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// creamos el formato para el dinero, además aproxima valores (caso de trabajar dolares)


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        marginLeft: 30,
    },
    action: {
        marginTop: "3rem",
    },
    media: {
        height: 100,
        paddingTop: '56.25%',
    },
    header: {
        textAlign: "center",
    },
    content: {
        Color: "Blue",
    },
}));


export default function Admin() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                /*   Acciones del admin (Agregar, eliminar, stock, editar, etc... )  */
                title="Nombre Opción"
            />
            <CardMedia
                className={classes.media}
                /*  aqui podriamos agregar en vez de la foto un icono que simule la accion */
                image="https://vidanat.cl/wp-content/uploads/2019/01/calcio-magnesio-vitamina-c-y-d3.png"
                title="Vitaminas"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Actúa como activador del metabolismo de carbohidratos y proteinas,
                    regulando la contracción muscular ayudando a evitar los calambres.
                </Typography>
            </CardContent>
        </Card>
    );
}