import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// 컴포넌트 연결
import style from './styles/ComplainForm.module.css';

// MUI
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const ComplainForm = () => {


    // Link State 받아오기
    const lineInfo = useLocation().state;

    // 희망 온도
    const [temperature, setTemperature] = useState(20);
    const marks = [];
    for (let i = 18; i <= 24; i += 0.5) {
        marks.push({
            value: i,
            label: `${i}˚C`,
        })
    }
    const tempHandler = (e, newTemp) => {
        setTemperature(newTemp);
    }

    // MUI Theme 
    const theme = createTheme({
        palette: {
            primary: {
                main: lineInfo.color,
                contrastText: '#fff',
            },
        },
    })

    return (
        <ThemeProvider theme={theme}>
            <div style={{ backgroundColor: lineInfo.color, minHeight: "100vh" }}>
                <Container maxWidth="xs" style={{ backgroundColor: lineInfo.color }}  >

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyItems: "center",
                            pb: 5
                        }}>

                        {/* 뒤로 가기 버튼 */}
                        <Link to="/" style={{ alignSelf: "flex-start", position: "absolute", top: 10 }}>
                            <ChevronLeftIcon
                                sx={{ fontSize: 40, color: "white" }}
                            />
                        </Link>

                        <Typography component="h1" variant="h5" className={style.title} sx={{ mt: 5 }}>
                            {lineInfo.line}호선 열차 민원 접수
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                borderRadius: 1,
                                width: "80%",
                                px: 3,
                                my: 2,
                                py: 3,
                            }}
                            style={{ backgroundColor: "white" }}
                        >
                            <FormGroup sx={{ width: "100%", fontSize: 14 }} className={style.formGroup}>
                                <Box sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
                                    열차번호
                                    <TextField id="train-number" label="Train" variant="outlined" sx={{ mt: 1 }} />
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
                                    행선지
                                    <TextField id="destination" label="Destination" variant="outlined" sx={{ mt: 1 }} />
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
                                    전화번호
                                    <TextField id="phone-number" label="Phone Number" variant="outlined" sx={{ mt: 1 }} />
                                </Box>

                                {/* 불편사항 */}
                                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", mt: 2, height: 430 }}>
                                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                                        불편사항
                                        <FormControlLabel control={<Checkbox />} sx={{ mt: 1, mb: 0.5 }} label="없음" />
                                        <FormControlLabel control={<Checkbox />} sx={{ mb: 0.5 }} label="마스크" />
                                        <FormControlLabel control={<Checkbox />} sx={{ mb: 0.5 }} label="잡상인" />
                                        <FormControlLabel control={<Checkbox />} sx={{ mb: 0.5 }} label="취객" />
                                        <FormControlLabel control={<Checkbox />} sx={{ mb: 0.5 }} label="오물" />
                                        <FormControlLabel control={<Checkbox />} sx={{ mb: 0.5 }} label="난동" />
                                        <FormControlLabel control={<Checkbox />} sx={{ mb: 0.5 }} label="응급환자" />
                                        <FormControlLabel control={<Checkbox />} sx={{ mb: 0.5 }} label="몰래카메라 의심" />
                                    </Box>

                                    {/* 희망온도 조절 */}
                                    <Box sx={{
                                        display: "flex", flexDirection: "column", width: 100
                                    }} >
                                        <Slider
                                            sx={{
                                                my: 2
                                            }}
                                            valueLabelDisplay="auto"
                                            value={temperature}
                                            min={18}
                                            step={0.5}
                                            max={24}
                                            arial-lavel="Temperature"
                                            orientation="vertical"
                                            marks={marks}
                                            onChange={tempHandler}
                                        />
                                        <p style={{ fontWeight: "bold" }}>희망온도 : {temperature}</p>
                                    </Box>
                                </Box>

                                {/* 추가 요구 사항 */}
                                <Box sx={{ display: "flex", flexDirection: "column", mt: 2.5 }}>
                                    추가 요구 사항
                                    <TextField
                                        id="additional-requirement"
                                        label="Additional Requirement"
                                        variant="outlined"
                                        sx={{ mt: 1 }}
                                        fullWidth
                                        multiline
                                        rows={4}
                                    />
                                </Box>

                                {/* 사진 업로드 */}
                                <Button
                                    sx={{ mt: 2, width: "70%", alignSelf: "center" }}
                                    variant="outlined"
                                    component="label"
                                >
                                    <CameraAltIcon sx={{ mr: 1 }} />
                                    <Typography>
                                        {"사진 업로드"}
                                    </Typography>

                                    <input id={"upload-btn"} hidden type="file" />
                                </Button>

                                {/* 제출 버튼 */}
                                <Button
                                    sx={{ mt: 5 }}
                                    variant="contained"
                                >
                                    <DoneOutlineIcon sx={{ mr: 2 }} />
                                    <Typography>
                                        {"제출하기"}
                                    </Typography>
                                </Button>


                            </FormGroup>
                        </Box>
                    </Box>
                </Container >
            </div >
        </ThemeProvider>
    )
}

export default ComplainForm