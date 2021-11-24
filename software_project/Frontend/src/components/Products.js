import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Product from './Product';
import { useState, useEffect } from 'react';
// import './fotos'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

export default function Products() {
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

  return (
    <div className={classes.root}>
      <Grid container spacing={1} >
        {
          data.map(data => (

            <Grid item xs={2} sm={2} md={4}>
              <Product key={data.id_producto} product={data} />
            </Grid>
          ))}

      </Grid>
    </div>
  );
}
