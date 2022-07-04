import React, { useState, useEffect } from 'react';

// Style
import style from './styles/ComplainTable.module.css';

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
    const [newData, setData] = useState([]);

    useEffect(() => {
        setData(complainData);
    }, [complainData]);

    return (
        <div style={{ width: '100%' }}>

            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 650 }} aria-label="complain table" >
                    <TableHead sx={{ backgroundColor: '#00b992' }} >
                        <TableRow >
                            <TableCell sx={{ color: "white", fontSize: 18 }} className={style.table}>ID</TableCell>
                            <TableCell sx={{ color: "white", fontSize: 18 }} className={style.table}>Line</TableCell>
                            <TableCell sx={{ color: "white", fontSize: 18 }} className={style.table}>Train Number</TableCell>
                            <TableCell sx={{ color: "white", fontSize: 18 }} className={style.table}>Destination</TableCell>
                            <TableCell sx={{ color: "white", fontSize: 18 }} className={style.table}>Time</TableCell>
                            <TableCell sx={{ color: "white", fontSize: 18 }} className={style.table}>Phone Num</TableCell>
                            <TableCell sx={{ color: "white", fontSize: 18 }} className={style.table}>Temperature</TableCell>
                            <TableCell sx={{ color: "white", fontSize: 18 }} className={style.table}>Discomfort</TableCell>
                            <TableCell sx={{ color: "white", fontSize: 18 }} className={style.table}>Requirements</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {newData && newData.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{ textAlign: "center", fontSize: 16 }} className={style.table} component="th" scope="row">{row.id}</TableCell>
                                <TableCell sx={{ textAlign: "center", fontSize: 16 }} className={style.table}>{row.line}</TableCell>
                                <TableCell sx={{ textAlign: "center", fontSize: 16 }} className={style.table}>{row.trainNum}</TableCell>
                                <TableCell sx={{ textAlign: "center", fontSize: 16 }} className={style.table}>{row.destination}</TableCell>
                                <TableCell sx={{ textAlign: "center", fontSize: 16 }} className={style.table}>{row.time}</TableCell>
                                <TableCell sx={{ textAlign: "center", fontSize: 16 }} className={style.table}>{row.phoneNum}</TableCell>
                                <TableCell sx={{ textAlign: "center", fontSize: 16 }} className={style.table}>{row.temperature}</TableCell>
                                <TableCell sx={{ textAlign: "center", fontSize: 16 }} className={style.table}>{row.discomfort === "null" || row.discomfort === "" ? "-" : row.discomfort}</TableCell>
                                <TableCell sx={{ textAlign: "center", fontSize: 16 }} className={style.table}>{row.requirement === "null" || row.requirement === "" ? "-" : row.requirement}</TableCell>
                            </TableRow>
                        )) : ""}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    )
}

export default ComplainTable