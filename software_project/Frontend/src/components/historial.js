import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';

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

    const [data, setdata] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            fetch("http://localhost:4000/api/historial")
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setdata(data);
                });
        };
        getUsers().catch(null);
    }, []);

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
                    {data.map(data => (
                        <StyledTableRow key={data.id}>
                            <StyledTableCell align="right">{data.id_venta}</StyledTableCell>
                            <StyledTableCell align="right">{data.fecha}</StyledTableCell>
                            <StyledTableCell align="right">Vitaminas</StyledTableCell>
                            <StyledTableCell align="right">{data.cantidad}</StyledTableCell>
                            <StyledTableCell align="right">3000</StyledTableCell>
                            <StyledTableCell align="right">{data.subtotal}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}