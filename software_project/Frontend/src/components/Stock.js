import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from "@mui/material/TableHead";
import TextField from '@mui/material/TextField';
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

//import { producto } from '../../../Backend/src/controllers/producto.controller';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14
    }
}));

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


function createData(name, calories, stock, fat) {
    return { name, calories, stock, fat };
}

const rows = [
    createData('Cupcake', 305, 5, 3.7),
    createData('Donut', 452, 6, 25.0),
    createData('Eclair', 262, 15, 16.0),
    createData('Frozen yoghurt', 159, 5, 6.0),
    createData('Gingerbread', 356, 5, 16.0),
    createData('Honeycomb', 408, 5, 3.2),
    createData('Ice cream sandwich', 237, 5, 9.0),
    createData('Jelly Bean', 375, 5, 0.0),
    createData('KitKat', 518, 5, 26.0),
    createData('Lollipop', 392, 5, 0.2),
    createData('Marshmallow', 318, 5, 0),
    createData('Nougat', 360, 5, 19.0),
    createData('Oreo', 437, 5, 18.0),
    createData('Oreo', 437, 5, 18.0),
    createData('Oreo', 437, 5, 18.0),
    createData('Oreo', 437, 5, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function Stock() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);


    const [productoSeleccionado, setproductoSeleccionado] = useState({
        id_producto: '',
        nombre: '',
        id_categoria: '',
        marca: '',
        descripcion: '',
        precio: '',
        stock: ''
    });

    const seleccionarProducto = (data, caso) => {
        setproductoSeleccionado(data);
        (caso === 'Editar') ? setModalEditar(true) : setModalEliminar(true)
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setproductoSeleccionado((prevState) => ({
            ...prevState,
            [name]: value
        }))
        //console.log(productoSeleccionado);
    }

    const editar = () => {
        var dataNueva = data;
        dataNueva.map(producto => {
            if (producto.id_producto === productoSeleccionado.id_producto) {
                producto.nombre = productoSeleccionado.nombre;
                producto.id_categoria = productoSeleccionado.id_categoria;
                producto.marca = productoSeleccionado.marca;
                producto.descripcion = productoSeleccionado.descripcion;
                producto.precio = productoSeleccionado.precio;
                producto.stock = productoSeleccionado.stock;
            }
        });
        setData(dataNueva);
        setModalEditar(false);
    }

    const eliminar = () => {
        setData(data.filter(producto => producto.id_producto !== productoSeleccionado.id_producto));
        setModalEliminar(false);
    }

    const classes = useStyles();
    const [id_producto, setIDProducto] = useState("");
    //const [id, sedId] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    /*function validateForm() {
        return id_producto.length > 0;
    }*/


    /*async function modprod() {
        if (!loading) {
            setLoading(true);
            fetch('http://localhost:4000/api/editProducto', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id,
                    id_usuario: localStorage.getItem("token")
                }),
            })
                .then((response) => response.json())
                .then(async (json) => {
                    if (json.status) {
                        alert("Producto editado con exito!");
                    } else {
                        alert("Falló la edición del producto :(");
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
            setLoading(false);
        }
    }*/

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

    async function EliminarProd() {
        if (!loading) {
            setLoading(true);
            fetch('http://localhost:4000/api/modificarProducto', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    //ID_PRODUCTO: id_producto,
                    id_producto: localStorage.getItem("token")
                }),
            })
                .then((response) => response.json())
                .then(async (json) => {
                    if (json.status) {
                        alert("Se eliminó el producto con éxito!");
                    } else {
                        alert("No hay nada que eliminar");
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
            setLoading(false);
        }
    }

    function handleSubmit(event) {
        EliminarProd();
        event.preventDefault();
    }


    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">ID</StyledTableCell>
                            <StyledTableCell align="center">Nombre</StyledTableCell>
                            <StyledTableCell align="center">Precio</StyledTableCell>
                            <StyledTableCell align="center">Stock</StyledTableCell>
                            <StyledTableCell align="center"></StyledTableCell>
                            <StyledTableCell align="center"></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {
                            data.map(data => (
                                <TableRow key={data.id_producto}>
                                    <TableCell component="th" style={{ width: 160 }} align="center" scope="row">
                                        {data.id_producto}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="center">
                                        {data.nombre}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="center">
                                        {data.precio}
                                    </TableCell>
                                    <TableCell style={{ width: 100 }} align="center">
                                        {data.stock}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="center" >

                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            className={classes.submit}
                                            value_id={data.id_producto}
                                            onClick={() => seleccionarProducto(data, 'Editar')}
                                        >

                                            Editar
                                        </Button>

                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="center"  >
                                        <div onSubmit={handleSubmit} noValidate>
                                            <Button
                                                //disabled={!validateForm()}
                                                type="submit"
                                                value={data.id_producto}
                                                onChange={e => setIDProducto(data.id_producto)}
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                className={classes.submit}
                                                onClick={() => seleccionarProducto(data, 'Eliminar')}
                                            >
                                                Eliminar
                                            </Button>
                                        </div>

                                    </TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>

                </Table>
            </TableContainer>

            <Modal className="editar" isOpen={modalEditar}>
                <ModalHeader>
                    <div>
                        <h3>Editar Producto</h3>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label>ID</label>
                        <TextField
                            className="form-control"
                            readOnly
                            type="number"
                            name="id"
                            value={productoSeleccionado && productoSeleccionado.id_producto}
                            onChange={handleChange}
                        />

                        <label>nombre</label>
                        <TextField
                            className="form-control"
                            readOnly
                            type="text"
                            name="nombre"
                            value={productoSeleccionado && productoSeleccionado.nombre}
                            onChange={handleChange}
                        />

                        <label>ID_categoria</label>
                        <TextField
                            className="form-control"
                            readOnly
                            type="number"
                            name="id_categoria"
                            value={productoSeleccionado && productoSeleccionado.id_categoria}
                            onChange={handleChange}
                        />

                        <label>Marca</label>
                        <TextField
                            className="form-control"
                            readOnly
                            type="text"
                            name="marca"
                            value={productoSeleccionado && productoSeleccionado.marca}
                            onChange={handleChange}
                        />

                        <label>Descripcion</label>
                        <TextField
                            className="form-control"
                            readOnly
                            type="text"
                            name="descripcion"
                            value={productoSeleccionado && productoSeleccionado.descripcion}
                            onChange={handleChange}
                        />

                        <label>Precio</label>
                        <TextField
                            className="form-control"
                            readOnly
                            type="number"
                            name="precio"
                            value={productoSeleccionado && productoSeleccionado.precio}
                            onChange={handleChange}
                        />

                        <label>Stock</label>
                        <TextField
                            className="form-control"
                            readOnly
                            type="number"
                            name="stock"
                            value={productoSeleccionado && productoSeleccionado.stock}
                            onChange={handleChange}
                        />
                        <br />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button className="btn btn-primary" onClick={() => editar()}>
                        Actualizar
                    </Button>
                    <Button className="btn btn-danger"
                        onClick={() => setModalEditar(false)}
                    >
                        Cancelar
                    </Button>
                </ModalFooter>
            </Modal>

            <Modal className="eliminar" isOpen={modalEliminar}>
                <ModalBody>
                    Estas seguro de que quieres eliminar el producto {productoSeleccionado && productoSeleccionado.nombre}
                </ModalBody>
                <ModalFooter>
                    <Button className="btn bnt-danger" onClick={() => eliminar()}>Sí</Button>
                    <Button className="btn btn.seconday" onClick={() => setModalEliminar(false)}>No</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
