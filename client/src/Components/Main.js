import React from 'react';
import { Link } from 'react-router-dom';

// 컴포넌트 연결
import style from './styles/Main.module.css';

// MUI
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const Main = () => {

  // 호선 별 색상
  const lineColor = {
    "1": "#0052a4",
    "2": "#009d3e",
    "3": "#ef7c1c",
    "4": "#00a5de",
    "5": "#996cac",
    "6": "#cd7c2f",
  }

  return (
    <Container maxWidth="xs">

      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>

        {/* admin 버튼 */}
        <Link to="/adminpage">
          <AdminPanelSettingsIcon
            sx={{ ml: 60, fontSize: 30, color: "black" }}
          />
        </Link>

        {/* 제목 */}
        <Typography component="h1" variant="h6" className={style.text} sx={{ mb: 5 }}>
          현재 탑승 중인 지하철 호선을 선택해주세요
        </Typography>

        {/* 호선 연결 */}
        <Link to='/complainform/1?trainNum=S/K401&destination=인천행'>
          <Button variant="contained" sx={{ width: 380, height: 50, m: 1, borderRadius: 5, fontSize: 24 }} style={{ backgroundColor: lineColor["1"] }} endIcon={<ArrowForwardIosIcon />} className={style.text} >1호선</Button>
        </Link>
        <Link to='/complainform/2?trainNum=S20521&destination=을지로순환행'>
          <Button variant="contained" sx={{ width: 380, height: 50, m: 1, borderRadius: 5, fontSize: 24 }} style={{ backgroundColor: lineColor["2"] }} endIcon={<ArrowForwardIosIcon />} className={style.text}>2호선</Button>
        </Link>
        <Link to='/complainform/3?trainNum=3421&destination=대화행'>
          <Button variant="contained" sx={{ width: 380, height: 50, m: 1, borderRadius: 5, fontSize: 24 }} style={{ backgroundColor: lineColor["3"] }} endIcon={<ArrowForwardIosIcon />} className={style.text}>3호선</Button>
        </Link>
        <Link to='/complainform/4?trainNum=4300&destination=당고개행'>
          <Button variant="contained" sx={{ width: 380, height: 50, m: 1, borderRadius: 5, fontSize: 24 }} style={{ backgroundColor: lineColor["4"] }} endIcon={<ArrowForwardIosIcon />} className={style.text}>4호선</Button>
        </Link>
        <Link to='/complainform/5?trainNum=5000&destination=방화행'>
          <Button variant="contained" sx={{ width: 380, height: 50, m: 1, borderRadius: 5, fontSize: 24 }} style={{ backgroundColor: lineColor["5"] }} endIcon={<ArrowForwardIosIcon />} className={style.text}>5호선</Button>
        </Link>
        <Link to='/complainform/6?trainNum=6000&destination=응암순환행'>
          <Button variant="contained" sx={{ width: 380, height: 50, m: 1, borderRadius: 5, fontSize: 24 }} style={{ backgroundColor: lineColor["6"] }} endIcon={<ArrowForwardIosIcon />} className={style.text}>6호선</Button>
        </Link>
      </Box>
    </Container >
  )
}

export default Main