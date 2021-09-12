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
// import accounting from 'accounting';

// creamos el formato para el dinero, además aproxima valores (caso de trabajar dolares)
var formatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action:{
    marginTop: "3rem",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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

export default function Productos() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
            <Typography
                className={classes.action}
                variant='h5'
                color='textSecondary'
            >
        {formatter.format(25000)}
        </Typography>
        }
        title="Producto nacional"
        subheader="10 unidades"
      />
      <CardMedia
        className={classes.media}
        image="https://images6.alphacoders.com/114/thumb-1920-1145395.png"
        title="Reze"
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Producto que contiene capacidades milagrosas para sanar a todos de
          la terrible caña que tendrás este 18
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label='Add to Cart'>
          <AddShoppingCart fontSize='large' />
        </IconButton>
        {Array(4)
            .fill()
            .map((_, i)=>(
                <p>&#11088;</p>
            ))}
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
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>"Estas ildoras estan hechas en base
          varias verduras y weas"</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}