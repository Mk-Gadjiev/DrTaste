import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Box, Typography } from '@mui/material';
import '../Insights/Insights.css';

Chart.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

function NeuromarketingInsight({ data, title }) {
  const defaultData = {
    labels: ['Default Label'],
    datasets: [
      {
        label: 'Default',
        data: [0],
        backgroundColor: 'rgba(200, 200, 200, 0.5)',
      },
    ],
  };

  return (
    <Box className="insight-section">
      <Typography variant="h5" sx={{ mb: 2 }}>
        {title || 'Neuromarketing Insight'}
      </Typography>
      <Radar data={data || defaultData} />
    </Box>
  );
}

export default NeuromarketingInsight;







