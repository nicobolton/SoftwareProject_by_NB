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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
        <Typography className={classes.action} variant='h5' color='textSecondary'>
        {formatter.format(25000)}
        </Typography>
        }
        title="Calcio magnesio vitamina C+D3"
        subheader="10 unidades"
      />
      <CardMedia
        className={classes.media}
        image="https://vidanat.cl/wp-content/uploads/2019/01/calcio-magnesio-vitamina-c-y-d3.png"
        title="Vitaminas"
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Actúa como activador del metabolismo de carbohidratos y proteinas, 
        regulando la contracción muscular ayudando a evitar los calambres.
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
          <Typography paragraph>
            100 cápsulas
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}