import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import MuiGrid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

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

  const content = (
    <div>
      {`Centro naturista con más de 30 años en el mercado siempre pensando en el bienestar de la Familia. Ofrecemos una gama de productos naturales para el cuidado de la salud, tenemos productos tanto de cosmética natural como suplementos alimenticios haciendo que su día a día sea más placentero y sobre todo una buena salud preventiva le dará una vejez más autovalente.
        Los nuevos tiempos nos han acercado a la Vida más sana en todos los sentidos, en Vida Natural buscamos acercarlos a este mundo de los productos naturales tenemos personal capacitado para responder todas sus dudas y guiarlos en el buen uso de estos productos.
        Los esperamos`}
    </div>
  );
  const contact = (
    <div>
      <h4> {`Teléfono: (+56) 2 87498765 `} </h4>
      <h4> {`Correo: Vidanatural_x@hotmail.com`} </h4>
    </div>
  );
  const horario = (
    <div>
      <h4> {`Horario: Lunes a viernes 10:30-13:30, 15:00-18:00  Sábado: 10:30 - 13:00`}</h4>
      <h4> {`Dirección: Monjitas 844, Local 37, Región Metropolitana de Santiago.`}</h4>
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


