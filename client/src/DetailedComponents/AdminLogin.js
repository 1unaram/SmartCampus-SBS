import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// Style
import style from './styles/AdminLogin.module.css';

// MUI
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

const AdminLogin = ({ trigger, setLogined }) => {

  // Admin Password
  const adminPass = "sbs";

  // Password handle
  const [password, setPassword] = useState("");
  const passwordInput = (e) => {
    setPassword(e.target.value);
  };
  const checkPassword = () => {
    if (password === adminPass) setLogined(true);
  }

  return (trigger) ? "" : (
    <Container maxWidth="xs">
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Box
          sx={{
            width: 320,
            height: 320,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "white",
            borderRadius: 5
          }}
        >
          <Link to="/">
            <CloseIcon sx={{ ml: 28, mb: 3, fontSize: 26 }} />
          </Link>
          <Typography variant="h5" sx={{ fontSize: 30, mb: 4, color: "blue" }} className={style.loginTitle}>
            <LockOpenIcon sx={{ fontSize: 30, }} /> Admin Login
          </Typography>
          <TextField label="Password" type="password" onChange={passwordInput} />
          <Button
            sx={{ width: 80, mt: 3, fontSize: 16, backgroundColor: "blue" }}
            variant="contained"
            className={style.loginBtn}
            onClick={checkPassword}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default AdminLogin