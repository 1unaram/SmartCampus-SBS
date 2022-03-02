import React from 'react'
import { useLocation } from 'react-router-dom';

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

const ComplainForm = () => {

    // Link State 받아오기
    const lineInfo = useLocation().state;

    return (
        <div style={{ backgroundColor: lineInfo.color }}>
            <Container maxWidth="xs" style={{ backgroundColor: lineInfo.color, height: "120vh" }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                    
                    <Typography component="h1" variant="h5" className={style.title} sx={{ mt: 5 }}>
                        {lineInfo.line}호선 열차 민원 접수
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignSelf: "stretch",
                            alignItems: "center",
                            borderRadius: 1,
                            py: 3,
                            my: 2,
                        }}
                        style={{ backgroundColor: "white" }}
                    >
                        <FormGroup>
                            <Box sx={{display: "flex", flexDirection: "column"}}>
                                열차번호 
                                <TextField id="train-number" label="Train" variant="outlined" />
                            </Box>
                            <Box sx={{display: "flex", flexDirection: "column"}}>
                                행선지
                                <TextField id="destination" label="Destination" variant="outlined" />
                            </Box>
                            <Box sx={{display: "flex", flexDirection: "column"}}>
                                전화번호
                                <TextField id="phone-number" label="Phone Number" variant="outlined" />
                            </Box>
                            <Box sx={{display: "flex", flexDirection: "column"}}>
                                <Box sx={{display: "flex", flexDirection: "column"}}>
                                    불편사항
                                    <FormControlLabel control={<Checkbox />} label="마스크" />
                                    <FormControlLabel control={<Checkbox />} label="잡상인" />
                                    <FormControlLabel control={<Checkbox />} label="취객" />
                                    <FormControlLabel control={<Checkbox />} label="오물" />
                                    <FormControlLabel control={<Checkbox />} label="난동" />
                                    <FormControlLabel control={<Checkbox />} label="응급환자" />
                                    <FormControlLabel control={<Checkbox />} label="몰래카메라 의심" />
                                </Box>
                                
                            </Box>
                        </FormGroup>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default ComplainForm