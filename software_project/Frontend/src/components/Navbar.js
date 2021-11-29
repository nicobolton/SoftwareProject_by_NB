import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icono from "../asset/Icono.png";
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import { Badge } from '@material-ui/core';
import { useStateValue } from '../StatePRovider';

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
  button2: {
    marginLeft: theme.spacing(0),
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

export default function Navbar() {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
            <a href="/"> <img src={Icono} alt="Logo" className={classes.image} /> </a>
          </IconButton>
          <div className={classes.grow} />
          <Typography variant="h6" color="textPrimary" component="p" >
            Via salud LTD.
          </Typography>

          <div className={classes.button}>
            <Button varian="outlined" href="/signin">
              <strong>Ingresar</strong>
            </Button>
            <Button varian="outlined" href="/supp">
              <strong>Soporte</strong>
            </Button>
            <Link to="checkout-page-nr">
              <IconButton aria-label="Mostrar items carrito" color="inherit">
                <Badge badgeContent={basket?.length} color="secondary"> {/*Color a la compra*/}
                  <ShoppingCart href="/checkout" frontsize="large" color="primary" />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
//Badge después se vuelve dinámico