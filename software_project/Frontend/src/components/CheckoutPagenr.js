import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography, typography } from "@material-ui/core";
//import { useStateValue } from "../StateProvider";
import CheckoutCard from "./CheckoutCard";
//import Total from "./Total";
import { useState, useEffect } from 'react';
import Total from './Total';
import { useStateValue } from '../StatePRovider';
// import './fotos'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: "2rem",
    },
}));

export default function CheckoutPagenr() {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [{ basket }, dispatch] = useStateValue();

    function FormRow() {
        return (
            <React.Fragment>
                {basket?.map((item) => (
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <CheckoutCard Key={item.id} product={item} />
                    </Grid>
                ))}
            </React.Fragment>
        );
    }

    return (

        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography align='center' gutterBottom variant='h4'>
                        Carrito de compra
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={9} container spacing={2}>
                    <FormRow />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Typography align='center' gutterBottom variant='h4'>
                        <Total />
                    </Typography>
                </Grid>
            </Grid>
        </div>

    );

}