import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {AddShoppingCart} from '@material-ui/icons';
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
  action:{
    marginTop: "3rem",
  },
  media: {
    height: 100,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));


export default function Product(){
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
        fetch("http://localhost:4000/api/producto")
            .then(response => response.json())
            .then(value => {
                setData(value);
                console.log(data)
                
            });
    };
    getProductos().catch(null);
}, []);

function xd(id){
  localStorage.setItem('id_producto',id.target.getAttribute('value'))
  window.location.href="#"
}

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div> {data.map (data =>(
    <Card className={classes.root}>
      <CardHeader
        action={
        <Typography className={classes.action} variant='h5' color='textSecondary'>
          {formatter.format(data.precio)}
        </Typography>
        }
        title={data.nombre}
        subheader={data.stock}
      />
      <CardMedia
        className={classes.media} //da el estilo a la wea
        height="300px"
        width="300px"
        image={require("./fotos/"+data.id_producto+".png")}
        title="productos"
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.descripcion}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label='Add to Cart'>
          <AddShoppingCart fontsize='large' />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
    </Card>
    ))}
    </div>
  );
}