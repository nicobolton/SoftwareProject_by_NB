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
        padding: '10px 600px 10px',
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
    const [email, setEmail] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [consulta, setConsulta] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    function validateForm() {
        return email.length > 0 && title.length > 0 && consulta.length > 0;
    }

    async function Consulta() {
        if (!loading) {
            setLoading(true);
            fetch('http://localhost:4000/api/addConsulta', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    correo: email,
                    estado: false,
                    titulo: title,
                    descripcion: consulta
                }),
            })
                .then((response) => response.json())
                .then(async (json) => {
                    if (json.status) {
                        alert("Registrado con éxito su consulta");
                    } else {
                        alert(" No se registro la consulta");
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
            setLoading(false);
        }
    }

    function handleSubmit(event) {
        Consulta()
        event.preventDefault();
    }


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

            <TextField className={classes.email}
                value={email}
                onChange={e => setEmail(e.target.value)}
                name="Correo"
                variant="outlined"
                required
                fullWidth
                id="Correo"
                label="Correo"
                autoFocus
            />
            <TextField className={classes.titulo}
                value={title}
                onChange={e => setTitle(e.target.value)}
                name="Titulo"
                variant="outlined"
                required
                id="Titulo"
                label="Titulo consulta"
                autoFocus
            />
            <div className={classes.consulta}>
                <TextField
                    value={consulta}
                    onChange={e => setConsulta(e.target.value)}
                    variant="outlined"
                    required
                    fullWidth
                    id="Descripcion"
                    label="Consulta"
                    multiline
                    rows={2}
                    style={{ width: '200' }}
                />
            </div >
            <div className={classes.boton}>
                <Button
                    disabled={!validateForm()}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Publicar
                </Button>
            </div>
        </Box>
    );
}
