import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
    // hide last border
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

export default function Historial() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>ID venta</StyledTableCell>
                        <StyledTableCell align="right">Fecha</StyledTableCell>
                        <StyledTableCell align="right">Producto</StyledTableCell>
                        <StyledTableCell align="right">Cantidad</StyledTableCell>
                        <StyledTableCell align="right">Precio</StyledTableCell>
                        <StyledTableCell align="right">Subtotal</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell align="right">{row.id}</StyledTableCell>
                            <StyledTableCell align="right">{row.fecha}</StyledTableCell>
                            <StyledTableCell align="right">{row.producto}</StyledTableCell>
                            <StyledTableCell align="right">{row.cantidad}</StyledTableCell>
                            <StyledTableCell align="right">{row.precio}</StyledTableCell>
                            <StyledTableCell align="right">{row.subtotal}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}