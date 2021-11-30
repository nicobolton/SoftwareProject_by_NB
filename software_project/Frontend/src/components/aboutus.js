import * as React from 'react';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@mui/material/Divider';
import MuiGrid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ButtonMailto from './correo';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Via Salud LTD
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  texto: {
    color: 'black',
    height: 80,
    padding: '0 400px 80px',
  },
  datos: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  contacto:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  contenedor:{
    border: '1px solid black',
    padding: '10px',
    margin: '40px',
  }
}));


const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function DividerText() {
  const classes = useStyles();

  const content = (
    <div className={classes.texto}>
      {`Centro naturista con más de 30 años en el mercado siempre pensando en el bienestar de la Familia. Ofrecemos una gama de productos naturales para el cuidado de la salud, tenemos productos tanto de cosmética natural como suplementos alimenticios haciendo que su día a día sea más placentero y sobre todo una buena salud preventiva le dará una vejez más autovalente.
        Los nuevos tiempos nos han acercado a la Vida más sana en todos los sentidos, en Vida Natural buscamos acercarlos a este mundo de los productos naturales tenemos personal capacitado para responder todas sus dudas y guiarlos en el buen uso de estos productos.`}
    </div>
  );
  const contact = (
    <div className={classes.contenedor}>
    <div className={classes.contacto}>
      <h4> {`Teléfono: (+56) 2 87498765 `} </h4>
      <h4> {`Email:`}<ButtonMailto label="Vidanatural_x@hotmail.com" mailto="mailto:Vidanatural_x@hotmail.com?subject=Subject'body=Body%20goes%20here" /> </h4>

    </div>
    </div>
  );
  const horario = (
    <div className={classes.contenedor}>
    <div className={classes.datos}>
      <h4> {"Horario: Lunes a viernes 10:30-13:30, 15:00-18:00"}</h4>
      <h4> {"Sábado 10:30-13:30"}</h4>
      <h4> {"Dirección: Monjitas 844, Local 37"}</h4>
      <h4>{"Región Metropolitana de Santiago"}</h4>
    </div>
    </div>
  );
  return (
    <Root>

      <Divider textAlign="center"><h1>Nosotros</h1></Divider>
      {content}

      <Grid container>
        <Grid item xs>
          {contact}
        </Grid>
        <Divider orientation="vertical" flexItem>
          <h3>Contacto y Horario</h3>
        </Divider>
        <Grid item xs>
          {horario}
        </Grid>
      </Grid>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Root>

  );
}

// const Grid = styled(MuiGrid)(({ theme }) => ({
//   width: '100%',
//   ...theme.typography.body2,
//   '& [role="separator"]': {
//     margin: theme.spacing(0, 2),
//   },
// }));

// export default function VerticalDividerText() {
//   const content = (
//     <div>
//       {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
//    Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
//    Sed malesuada lobortis pretium.`}
//     </div>
//   );

//   return (
    // <Grid container>
    //   <Grid item xs>
    //     {content}
    //   </Grid>
    //   <Divider orientation="vertical" flexItem>
    //     VERTICAL
    //   </Divider>
    //   <Grid item xs>
    //     {content}
    //   </Grid>
    // </Grid>
//   );
// }


