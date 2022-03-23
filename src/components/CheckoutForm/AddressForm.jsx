import React from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import FormInput from './Checkout/FormInput';

export default function AddressForm() {
    const methods = useForm();
    
  return (
    <>
        <Typography variant='h6' gutterBottom>Shipping Address</Typography>
        <FormProvider {...methods}>
            <form onSubmit="">
                <Grid container spacing={3}>
                    <FormInput required name="firstName" label="First name" />
                </Grid>
            </form>
        </FormProvider>
    </>
  )
}
