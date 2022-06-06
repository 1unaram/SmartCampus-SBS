import React, { useState, useEffect } from 'react'

// MUI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ComplainTable = ({ complainData }) => {

    // Data state
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(complainData);
    }, [complainData]);

    return (
        <div style={{ width: '100%' }}>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="complain table">
                    <TableHead sx={{ backgroundColor: '#00b992' }}>
                        <TableRow >
                            <TableCell sx={{ color: "white" }}>ID</TableCell>
                            <TableCell sx={{ color: "white" }}>Line</TableCell>
                            <TableCell sx={{ color: "white" }}>Train Number</TableCell>
                            <TableCell sx={{ color: "white" }}>Destination</TableCell>
                            <TableCell sx={{ color: "white" }}>Time</TableCell>
                            <TableCell sx={{ color: "white" }}>Phone Num</TableCell>
                            <TableCell sx={{ color: "white" }}>Temperature</TableCell>
                            <TableCell sx={{ color: "white" }}>Discomfort</TableCell>
                            <TableCell sx={{ color: "white" }}>Requirements</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {data.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{ textAlign: "center" }} component="th" scope="row">{row.id}</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>{row.line}</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>{row.trainNum}</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>{row.destination}</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>{row.time}</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>{row.phoneNum}</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>{row.temperature}</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>{row.discomfort === "null" || row.discomfort === "" ? "-" : row.discomfort}</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>{row.requirement === "null" || row.requirement === "" ? "-" : row.requirement}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    )
}

export default ComplainTable