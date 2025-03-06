// src/Components/Insights/SocialMediaSentiment.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';

function SocialMediaSentiment({ data }) {
  const defaultData = {
    labels: ['Positivo', 'Neutro', 'Negativo'],
    datasets: [
      {
        label: 'Sentiment sui Social',
        data: [60, 25, 15],
        backgroundColor: ['#4caf50', '#ffc107', '#f44336'],
      },
    ],
  };

  return (
    <Box className="insight-section" sx={{ maxWidth: 600 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Sentiment sui Social Media
      </Typography>
      <Bar data={data || defaultData} />
    </Box>
  );
}

export default SocialMediaSentiment;


