// src/Components/Insights/InsightCombination.js
import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';

function InsightCombination({ data }) {
  const defaultData = {
    labels: ['Attenzione', 'Coinvolgimento', 'Emozione'],
    datasets: [
      {
        label: 'Combinazione di Insight',
        data: [70, 80, 65],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <Box className="insight-section" sx={{ maxWidth: 600 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Combinazione di Insight
      </Typography>
      <Radar data={data || defaultData} />
    </Box>
  );
}

export default InsightCombination;


