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
        <Link to="/adminpage" style={{ position: "absolute", right: 10, top: 20 }}>
          <AdminPanelSettingsIcon
            sx={{ fontSize: 30, color: "black" }}
          />
        </Link>

        {/* 제목 */}
        <Typography component="h1" variant="h6" className={style.chooseTitle}>
          현재 탑승 중인 지하철 호선을 선택해주세요
        </Typography>

        {/* 호선 연결 */}
        <Link to='/complainform?id=1' state={{ line: "1", color: lineColor["1"] }}>
          <Button variant="contained" sx={{ m: 1, px: 12 }} style={{ backgroundColor: lineColor["1"] }} endIcon={<ArrowForwardIosIcon />} >1호선</Button>
        </Link>
        <Link to='/complainform?id=2' state={{ line: "2", color: lineColor["2"] }}>
          <Button variant="contained" sx={{ m: 1, px: 12 }} style={{ backgroundColor: lineColor["2"] }} endIcon={<ArrowForwardIosIcon />} className={style.line2}>2호선</Button>
        </Link>
        <Link to='/complainform?id=3' state={{ line: "3", color: lineColor["3"] }}>
          <Button variant="contained" sx={{ m: 1, px: 12 }} style={{ backgroundColor: lineColor["3"] }} endIcon={<ArrowForwardIosIcon />} className={style.line3}>3호선</Button>
        </Link>
        <Link to='/complainform?id=4' state={{ line: "4", color: lineColor["4"] }}>
          <Button variant="contained" sx={{ m: 1, px: 12 }} style={{ backgroundColor: lineColor["4"] }} endIcon={<ArrowForwardIosIcon />} className={style.line4}>4호선</Button>
        </Link>
        <Link to='/complainform?id=5' state={{ line: "5", color: lineColor["5"] }}>
          <Button variant="contained" sx={{ m: 1, px: 12 }} style={{ backgroundColor: lineColor["5"] }} endIcon={<ArrowForwardIosIcon />} className={style.line5}>5호선</Button>
        </Link>
        <Link to='/complainform?id=6' state={{ line: "6", color: lineColor["6"] }}>
          <Button variant="contained" sx={{ m: 1, px: 12 }} style={{ backgroundColor: lineColor["6"] }} endIcon={<ArrowForwardIosIcon />} className={style.line6}>6호선</Button>
        </Link>
      </Box>
    </Container >
  )
}

export default Main