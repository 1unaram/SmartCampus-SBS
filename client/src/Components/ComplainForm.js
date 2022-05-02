import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

const ComplainForm = () => {

    // Link State 받아오기
    const lineInfo = useLocation().state;

    // MUI Theme 
    const theme = createTheme({
        palette: {
            primary: {
                main: lineInfo.color,
                contrastText: '#fff',
            },
        },
    })

    /* 데이터 관리 */
    // form 데이터 관리
    const [complainData, setComplainData] = useState({
        trainNum: "",
        line: lineInfo.line,
        destination: "",
        phoneNum: "",
        discomfort: [],
        temperature: "",
        requirement: "",
    })

    // 희망 온도
    const [temperature, setTemperature] = useState(20);
    let marks = [];
    for (let i = 18; i <= 24; i += 0.5) {
        marks.push({
            value: i,
            label: `${i}˚C`,
        })
    }
    const tempHandler = (e, newTemp) => {
        setTemperature(newTemp);
    }

    // 불편사항 Checkbox
    const checkboxLabel = {
        "없음": 0,
        "마스크": 0,
        "잡상인": 0,
        "취객": 0,
        "오물": 0,
        "난동": 0,
        "응급환자": 0,
        "몰래카메라 의심": 0,
    };

    // 이미지 업로드
    const [img, setImg] = useState('');
    const onLoadImg = (e) => {
        const file = e.target.files;
        console.log(file);
        setImg(file);
    }

    // handle input value
    const handleInput = (e) => {
        const newData = { ...complainData };
        newData[e.target.id] = e.target.value;
        setComplainData(newData);
    }

    // handle checkbox value
    const handleCheckbox = (e) => {
        let newChecked = [...complainData.discomfort];

        if (e.target.checked) {
            newChecked.push(e.target.value);
        } else {
            newChecked = complainData.discomfort.filter((item) => item !== e.target.value);
        }

        const newData = { ...complainData };
        newData.discomfort = newChecked;

        setComplainData(newData)
    }

    // Submit handle
    const submitComplain = () => {
        complainData.temperature = temperature;
        axios.post("/submitComplain", complainData)
        console.log(complainData)

        handleDialog();
        handleOKdialog();
    };

    /* 다이얼로그 관리 */
    // Confirm Dialog
    const [dialog, setDialog] = useState(false);
    const handleDialog = () => {
        setDialog(!dialog)
    };

    // OK Dialog
    const [OKdialog, setOKdialog] = useState(false);
    const handleOKdialog = () => {
        setOKdialog(!OKdialog)
    };

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
                                    <TextField id="trainNum" label="Train" variant="outlined" sx={{ mt: 1 }} onChange={handleInput} />
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
                                    행선지
                                    <TextField id="destination" label="Destination" variant="outlined" sx={{ mt: 1 }} onChange={handleInput} />
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
                                    전화번호
                                    <TextField id="phoneNum" label="Phone Number" variant="outlined" sx={{ mt: 1 }} onChange={handleInput} />
                                </Box>

                                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", mt: 2, height: 430 }}>
                                    {/* 불편사항 */}
                                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                                        불편사항
                                        {Object.keys(checkboxLabel).map((item, index) => (
                                            <FormControlLabel control={<Checkbox />} sx={{ mb: 0.5 }} key={index} value={item} label={item} onClick={handleCheckbox} />
                                        ))}
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
                                        id="requirement"
                                        label="Additional Requirement"
                                        variant="outlined"
                                        sx={{ mt: 1 }}
                                        fullWidth
                                        multiline
                                        rows={4}
                                        onChange={handleInput}
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

                                    <input id={"upload-btn"} hidden type="file" onChange={onLoadImg} />
                                </Button>

                                {/* 제출 버튼 */}
                                <Button
                                    sx={{ mt: 5 }}
                                    variant="contained"
                                    onClick={handleDialog}
                                >
                                    <DoneOutlineIcon sx={{ mr: 2 }} />
                                    <Typography>
                                        {"제출하기"}
                                    </Typography>
                                </Button>


                            </FormGroup>
                        </Box>

                        {/* Confirm Dialog */}
                        <Dialog
                            open={dialog}
                            onClose={handleDialog}
                            aria-describedby="alert-dialog1-description"
                        >
                            <DialogTitle>
                                {"민원을 접수하시겠습니까?"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog1-description">
                                    {"제출 후에는 수정이 불가합니다."}
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleDialog}>아니요</Button>
                                <Button onClick={submitComplain}>네</Button>
                            </DialogActions>
                        </Dialog>

                        <Dialog
                            open={OKdialog}
                            onClose={handleOKdialog}
                            aria-describedby="alert-dialog2-description"
                        >
                            <DialogTitle>
                                {"성공적으로 민원이 접수되었습니다"}
                            </DialogTitle>
                            <DialogActions>
                                <Button onClick={handleOKdialog}>OK</Button>
                            </DialogActions>
                        </Dialog>
                    </Box>

                </Container >
            </div >
        </ThemeProvider >
    )
}

export default ComplainForm