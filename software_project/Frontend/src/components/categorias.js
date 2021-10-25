import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useState, useEffect } from 'react';

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


export default function Categorias() {
    const classes = useStyles();
    const [data, setData] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
        fetch("http://localhost:4000/api/categoria")
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
    return (
        <div> {data.map (data =>(
        <Card className={classes.root}>
            <CardHeader
                title={data.nombre}
            />
            <CardMedia
                className={classes.media}
                image="https://vidanat.cl/wp-content/uploads/2019/01/calcio-magnesio-vitamina-c-y-d3.png"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Actúa como activador del metabolismo de carbohidratos y proteinas,
                    regulando la contracción muscular ayudando a evitar los calambres.
                </Typography>
            </CardContent>
        </Card>
        ))}</div>
    );
}

