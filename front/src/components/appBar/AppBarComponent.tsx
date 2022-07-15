import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Outlet } from 'react-router';


export default function AppBarComponent() {

  return (
    <>
      <Box >
        <AppBar position="static" style={{ backgroundColor: '#6B8E23' }}>
          <Toolbar>
            <img style={{ width: 100 }} alt="Remy Sharp" src="/assets/img/logo-main.png" />
            <Box sx={{ flexGrow: 1 }} />
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}
