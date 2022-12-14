import React from 'react'
import { Box, TableContainer, TableRow, Table, TableCell, TableBody, Paper } from '@mui/material';

export default function PriceTable() {
    return (
        <Box>
            <TableContainer component={Paper}>
                <Table sx={{ maxWidth: '300px' }} size="small">
                    <TableBody>
                        <TableRow
                            sx={{ border: 'solid 1px #000' }}
                        >
                            <TableCell component="th" tabIndex='0' aria-label='Subtotal R$ 9,90' scope="row">SUBTOTAL</TableCell>
                            <TableCell align="right">R$ 9,90</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ border: 'solid 1px #000' }}
                        >
                            <TableCell component="th" tabIndex='0' aria-label='Frete R$ 9,90' scope="row">FRETE</TableCell>
                            <TableCell align="right">R$ 9,90</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ border: 'solid 1px #000' }}
                        >
                            <TableCell component="th" tabIndex='0' aria-label='Total R$ 9,90' scope="row">TOTAL</TableCell>
                            <TableCell align="right">R$ 9,90</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}
