import React from 'react'
import { Link } from 'react-router-dom';

// Styles
import style from './styles/NotFound.module.css';

// MUI
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Button from '@mui/material/Button';

const NotFound = () => {
  return (
    <Container maxWidth="xs">
        <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
            <SentimentVeryDissatisfiedIcon 
                sx={{fontSize: 130, mb: 2}}
            />
            <Typography 
                component="h1" 
                variant="h5" 
                className={style.title} 
                sx={{letterSpacing: 2, mb: 10}}
            >
                Page Not Found.. 
            </Typography>
            <Link to="/">
                <Button variant="outlined" sx={{fontSize: 14, fontWeight: "bold"}}>
                    Go Back Home &gt;
                </Button>
            </Link>
        </Box>
    </Container>
  )
}

export default NotFound