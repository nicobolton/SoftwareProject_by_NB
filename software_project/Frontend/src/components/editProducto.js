/*import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    //hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(id, fecha, producto, cantidad, precio, subtotal) {
    return { id, fecha, producto, cantidad, precio, subtotal };
}

const rows = [
    createData('00001', '25 - 09 - 2021', 'Natural Lady', 5, 15000, 75000),
    createData('00001', '25 - 09 - 2021', 'Virilong', 3, 20000, 60000),
    createData('00002', '27 - 09 - 2021', 'Calcio magnesio vitamina C+D3', 4, 25000, 100000),
    createData('00002', '27 - 09 - 2021', 'Jalea real', 2, 20000, 40000),

];

export default function editProducto() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getProd = async () => {
            fetch("http:localhost:4000/api/editProducto")
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setData(data);
                });
        };
        getProd().catch(null);
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">ID venta</StyledTableCell>
                        <StyledTableCell align="center">Fecha</StyledTableCell>
                        <StyledTableCell align="center">Producto</StyledTableCell>
                        <StyledTableCell align="center">Cantidad</StyledTableCell>
                        <StyledTableCell align="center">Precio</StyledTableCell>
                        <StyledTableCell align="center">Subtotal</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(data => (
                        <StyledTableRow key={data.id}>
                            <StyledTableCell align="center">{data.id_venta}</StyledTableCell>
                            <StyledTableCell align="center">{data.fecha}</StyledTableCell>
                            <StyledTableCell align="center">Vitaminas</StyledTableCell>
                            <StyledTableCell align="center">{data.cantidad}</StyledTableCell>
                            <StyledTableCell align="center">3000</StyledTableCell>
                            <StyledTableCell align="center">{data.subtotal}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}*/