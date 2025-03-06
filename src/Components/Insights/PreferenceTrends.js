// src/Components/Insights/PreferenceTrends.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';

function PreferenceTrends({ data }) {
  return (
    <Box className="chart-container" sx={{ maxWidth: 600, width: '100%' }}>
      <Typography variant="h6" className="chart-title" align="center" sx={{ mb: 2 }}>
        Trend delle Preferenze
      </Typography>
      <Line data={data} />
    </Box>
  );
}

export default PreferenceTrends;



