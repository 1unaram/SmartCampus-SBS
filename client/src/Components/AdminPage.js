import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

// 컴포넌트 연결
import style from './styles/AdminPage.module.css';
import ComplainTable from '../DetailedComponents/ComplainTable';

// MUI
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import RefreshIcon from '@mui/icons-material/Refresh';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const AdminPage = () => {

    // 호선 별 색상
    const lineColor = {
        "1": "#0052a4",
        "2": "#009d3e",
        "3": "#ef7c1c",
        "4": "#00a5de",
        "5": "#996cac",
        "6": "#cd7c2f",
    }


    // Load complain
    const [complainData, setComplainData] = useState([]);
    const loadComplain = () => {
        axios.get("/loadComplain")
            .then((res) => { setComplainData(res.data) })
            .catch((err) => { console.log('Cannot load complains from server : ', err) });
    };
    useEffect(() => {
        loadComplain();
    }, [])

    // Toggle Button - filtered
    const [selectedComplain, setSelectedComplain] = useState('1')
    const [filteredComplain, setFilteredComplain] = useState([]);
    const handleSelectedComplain = (event, newSelectedComplain) => {
        setSelectedComplain(newSelectedComplain);
    }
    useEffect(() => {
        selectedComplain === '0' ? setFilteredComplain(complainData) :
            setFilteredComplain(() =>
                complainData.filter((complain) => parseInt(selectedComplain) === complain.line)
            )
    }, [selectedComplain, complainData])

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>

                {/* 뒤로 가기 버튼 */}
                <Link to="/" style={{ alignSelf: "flex-start", position: "absolute", top: 10 }}>
                    <ChevronLeftIcon
                        sx={{ fontSize: 40, color: "black" }}
                    />
                </Link>

                {/* 제목 */}
                <Typography variant="h5" className={style.chooseTitle} sx={{ mb: 5 }}>
                    Admin Page
                </Typography>

                <ToggleButtonGroup
                    value={selectedComplain}
                    exclusive
                    onChange={handleSelectedComplain}
                    size="large"
                    sx={{ mb: 3 }}
                >
                    <ToggleButton value="0" sx={{ backgroundColor: "black", color: "white" }} >All</ToggleButton >
                    <ToggleButton value="1" sx={{ backgroundColor: lineColor[1], color: "white" }}>1</ToggleButton >
                    <ToggleButton value="2" sx={{ backgroundColor: lineColor[2], color: "white" }}>2</ToggleButton >
                    <ToggleButton value="3" sx={{ backgroundColor: lineColor[3], color: "white" }}>3</ToggleButton >
                    <ToggleButton value="4" sx={{ backgroundColor: lineColor[4], color: "white" }}>4</ToggleButton >
                    <ToggleButton value="5" sx={{ backgroundColor: lineColor[5], color: "white" }}>5</ToggleButton >
                    <ToggleButton value="6" sx={{ backgroundColor: lineColor[6], color: "white" }}>6</ToggleButton >
                </ToggleButtonGroup>

                {/* 새로고침 */}
                <Box
                    sx={{ display: "flex", alignSelf: "flex-end", mb: 1 }}
                    onClick={loadComplain}
                >
                    refresh<RefreshIcon />
                </Box>

                {/* Data Table */}
                <ComplainTable complainData={filteredComplain} />

            </Box>
        </Container >
    )
}

export default AdminPage