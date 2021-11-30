import { Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider } from "react-hook-form";
import AddressInput from './AddressInput';
import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const AddressForm = () => {
    const methods = useForm();
    return (
        <>
            <Typography variant='h6' gutterBottom>
                Shipping address
            </Typography>
            <FormProvider >
                <form onSubmit={methods.handleSubmit(data => {
                    console.log(data)
                })}>
                    <Grid container spacing={3}>
                        <AddressInput required name="firstName" label="Primer Nombre" />
                        <AddressInput required name='lastName' label='Segundo Nombre' />
                        <AddressInput required name='address1' label='Dirección' />
                        <AddressInput required name='email' label='Email' />
                        <AddressInput required name='city ' label='Ciudad' />
                        <AddressInput required name='postCode' label='Codigo Postal' />

                    </Grid>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
                        <Button component={Link} to="/checkout-page" >
                            Atras
                        </Button>
                        <Button type="submit" variant="contained" color="primary">
                            Siguiente
                        </Button>
                    </div>


                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
