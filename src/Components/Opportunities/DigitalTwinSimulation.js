// src/Components/Opportunities/DigitalTwinSimulation.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import ChartComponent from './ChartComponent';

const DigitalTwinSimulation = ({ demographicPreferences, emotionData, recommendations }) => {
  return (
    <Box>
      <Typography variant="subtitle1">Segmentazione Target</Typography>
      <ChartComponent type="bar" data={demographicPreferences} />

      <Typography variant="subtitle1" sx={{ mt: 2 }}>Heatmap delle Emozioni (Digital Twin)</Typography>
      <ChartComponent type="bar" data={emotionData} />

      <Typography variant="subtitle1" sx={{ mt: 2 }}>Suggerimenti Personalizzati</Typography>
      <Box sx={{ border: '1px solid #ddd', padding: 2 }}>
        {recommendations.map((tip, index) => (
          <Typography key={index} variant="body2">
            - {tip}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default DigitalTwinSimulation;


