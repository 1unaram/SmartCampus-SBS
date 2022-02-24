import React from 'react'
import { useLocation } from 'react-router-dom';

// 컴포넌트 연결
import style from './styles/ComplainForm.module.css';

// MUI
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const ComplainForm = () => {

    // Link State 받아오기
    const lineInfo = useLocation().state;

    return (
        <div style={{ backgroundColor: lineInfo.color }}>
            <Container maxWidth="xs" style={{ backgroundColor: lineInfo.color, height: "100vh" }}>
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
                        열차번호
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default ComplainForm