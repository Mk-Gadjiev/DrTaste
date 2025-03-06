import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Box, Typography } from '@mui/material';
import '../Insights/Insights.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function ConsumerPreferences({ data, title }) {
  const defaultData = {
    labels: ['Default Label'],
    datasets: [
      {
        label: 'Default',
        data: [0],
        backgroundColor: ['#cfcfcf'],
      },
    ],
  };

  return (
    <Box className="insight-section">
      <Typography variant="h5" sx={{ mb: 2 }}>
        {title || 'Consumer Preferences'}
      </Typography>
      <Bar data={data || defaultData} />
    </Box>
  );
}

export default ConsumerPreferences;








