import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icono from "../asset/Icono.png";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: "7rem",
    },
    appBar: {
        backgroundColor: "whitesmoke",
        boxShadow: "yes",
    },
    grow: {
        flexGrow: 1, //Permite ocuparle el máximo que pueda
    },
    button: {
        marginLeft: theme.spacing(2),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    image: {
        marginRight: "10px",
        width: "4rem"
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Navbar_admin() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
                        <a href="/"> <img src={Icono} alt="Logo" className={classes.image} /> </a>
                    </IconButton>
                    <div className={classes.button2}>
                        <Button varian="outlined" href="/AddProducto">
                            <strong>Agregar</strong>
                        </Button>
                    </div>
                    <div className={classes.button2}>
                        <Button varian="outlined" href="/DelProducto">
                            <strong>Eliminar</strong>
                        </Button>
                    </div>
                    <div className={classes.button2}>
                        <Button varian="outlined" href="/Stock">
                            <strong>Stock</strong>
                        </Button>
                    </div>
                    <div className={classes.grow} />
                    <Typography variant="h6" color="textPrimary" component="p" >
                        Via salud LTD.
                    </Typography>
                    <div className={classes.button}>
                        <Button varian="outlined" href="/App">
                            <strong>Cerrar Sesión</strong>
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
//Badge después se vuelve dinámico