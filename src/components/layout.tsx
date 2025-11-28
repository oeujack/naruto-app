import { Box } from '@mui/material';
import { Outlet } from '@tanstack/react-router';
import CreateBy from './create-by';

export function Layout() {
  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Outlet />
      </Box>
      <CreateBy position="footer" />
    </Box>
  );
}
