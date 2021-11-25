import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import Icono from "../asset/Icono.png";
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';



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

export default function Navbar_usr() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
                        <a href="/user"> <img src={Icono} alt="Logo" className={classes.image} /> </a>
                    </IconButton>
                    <div className={classes.button2}>
                        <Button varian="outlined" href="/categorias">
                            <strong>Categorías</strong>
                        </Button>
                    </div>
                    <div className={classes.grow} />
                    <Typography variant="h6" color="textPrimary" component="p" >
                        Via salud LTD.
                    </Typography>
                    <div className={classes.button}>

                        <Button
                            id="fade-button"
                            aria-controls="fade-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            Mi cuenta
                        </Button>
                        <Menu
                            id="fade-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            <Link to="/clientes"><MenuItem onClick={handleClose}>Perfil</MenuItem></Link>
                            <Link to="/editarUsuario"><MenuItem onClick={handleClose} >Actualizar Datos</MenuItem></Link>
                            <Link to="/changePassword"><MenuItem onClick={handleClose} >Cambiar Contraseña</MenuItem> </Link>
                        </Menu>

                        <Button varian="outlined" href="/historial">
                            <strong>historial</strong>
                        </Button>
                        <Button varian="outlined" href="/nosotros">
                            <strong>Sobre Nosotros</strong>
                        </Button>
                        <Button varian="outlined" href="/App">
                            <strong>Cerrar Sesión</strong>
                        </Button>
                        <IconButton aria-label="Mostrar items carrito" color="inherit">
                            <Badge badgeContent={1} color="secondary"> {/*Color a la compra*/}
                                <ShoppingCart href="/carrito" frontSize="large" color="primary" />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
//Badge después se vuelve dinámico