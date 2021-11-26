import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function StateTextFields() {

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch', height: '10ch', size: '10ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-name"
        label="Titulo"
      />
      <div>
      <TextField
        id="outlined-uncontrolled"
        label="Consulta"
        multiline
        rows={2}
        style = {{ width: '200' }}
      />
      </div>
      <div>
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
