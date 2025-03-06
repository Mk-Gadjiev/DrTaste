// src/Components/Opportunities/Sidebar.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Sidebar = () => {
  return (
    <Box sx={{ width: 250, borderRight: '1px solid #ccc', height: '100vh', p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Opzioni
      </Typography>
      <Typography variant="body2">
        Qui potresti inserire la navigazione per le sottosezioni (es. Sensory Insights, Trend, ecc.).
      </Typography>
    </Box>
  );
};

export default Sidebar;

