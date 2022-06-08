import React from 'react'

// Style
import style from './styles/AdminLogin.module.css';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const AdminLogin = ({ trigger }) => {
  return (trigger) ? "" : (
    <div>
        <Box
        sx={{
          position: 'fixed',
	        top: 0,
          left: 0,
          width: "100%",
          height: "100%",
	        backgroundColor: 'rgba(0, 0, 0, 0.4)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Typography variant="h5" sx={{ mb: 5 }} className={style.loginTitle}>
            Admin Login
          </Typography>
          <TextField label="Password" type="password"/>
        </Box>
    </div>
  );
}

export default AdminLogin