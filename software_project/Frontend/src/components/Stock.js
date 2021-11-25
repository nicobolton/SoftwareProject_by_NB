import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import { Link } from 'react-router-dom'
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
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

    const classes = useStyles();
    const [id_producto, setIDProducto] = useState("");
    const [id, sedId] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    function validateForm() {
        return id_producto.length > 0;
    }


    async function modprod() {
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
    }

    useEffect(() => {
        const getProductos = async () => {
            fetch("http://localhost:4000/api/producto")
                .then(response => response.json())
                .then(value => {
                    setData(value);
                    console.log(data)
                    const id = data.id_producto;
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
                    ID_PRODUCTO: id_producto
                }),
            })
                .then((response) => response.json())
                .then(async (json) => {
                    if (validateForm) {
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

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">ID</StyledTableCell>
                        <StyledTableCell align="center">Nombre</StyledTableCell>
                        <StyledTableCell align="center">Precio</StyledTableCell>
                        <StyledTableCell align="center">Mod Stock</StyledTableCell>
                        <StyledTableCell align="center">Editar</StyledTableCell>
                        <StyledTableCell align="center">Eliminar</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {
                        data.map(data => (
                            <TableRow value={id_producto} key={data.id_producto}>
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
                                    <button style={{ width: 20 }}>
                                        -
                                    </button>
                                    <TextField id="outlined-basic" style={{ width: 50 }} label={data.stock} variant="outlined" />
                                    <button style={{ width: 20 }}>
                                        +
                                    </button>
                                </TableCell>
                                <TableCell style={{ width: 160 }} align="center" >
                                    <Link to="/editar">
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            className={classes.submit}
                                        >

                                            Editar
                                        </Button>
                                    </Link>
                                </TableCell>
                                <TableCell onSubmit={handleSubmit} style={{ width: 160 }} align="center" noValidate >
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        className={classes.submit}
                                    >
                                        Eliminar
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }

                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>

                    )}

                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={3}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: {
                                    'aria-label': 'rows per page',
                                },
                                native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>

    );
}
