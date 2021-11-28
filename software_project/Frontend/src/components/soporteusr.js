import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
  box: {
    height: 500,
    padding: '10px 800px 10px',
  },
  title: {
    height: 100,
    fontSize: '3rem',
    padding: '10px 60px 10px 0px',
  },
  titulo: {
    height: 100,
    padding: '10px 60px 10px 0px',
    width: '200',
  },
  consulta: {
    height: 100,
    padding: '10px 60px 10px 0px',
    width: '200',
  },
}));

export default function StateTextFields() {
  const classes = useStyles();
  return (

    <Box
      className={classes.box}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch', height: '10ch', size: '10ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Divider textAlign="center"><h1>Ingrese su consulta</h1></Divider>
      <TextField className={classes.titulo}
        id="outlined-name"
        label="Titulo"
      />
      <TextField className={classes.email}
        id="outlined-name"
        label="Email"
      />
      <div className={classes.consulta}>
        <TextField
          id="outlined-uncontrolled"
          label="Consulta"
          multiline
          rows={2}
          style={{ width: '200' }}
        />
      </div >
      <div className={classes.boton}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        //className={classes.submit}
        //disabled={!validateForm()}
        >
          Publicar
        </Button>
      </div>
    </Box>
  );
}
