// src/Components/Opportunities/MarketTrends.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import ChartComponent from './ChartComponent';

const MarketTrends = ({ trendData, marketOpportunities, microTrends }) => {
  return (
    <Box>
      <Typography variant="subtitle1">Evoluzione Trend</Typography>
      <ChartComponent type="line" data={trendData} />

      <Typography variant="subtitle1" sx={{ mt: 2 }}>Opportunità di Mercato</Typography>
      <ChartComponent type="bar" data={marketOpportunities} />

      <Typography variant="subtitle1" sx={{ mt: 2 }}>Micro-Trend</Typography>
      <Box sx={{ border: '1px solid #ddd', padding: 2 }}>
        {microTrends.map((trend, index) => (
          <Box key={index} sx={{ mb: 1 }}>
            <Typography variant="body1" fontWeight="bold">
              {trend.trend}
            </Typography>
            <Typography variant="body2">{trend.description}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MarketTrends;

