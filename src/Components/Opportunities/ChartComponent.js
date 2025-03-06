// src/Components/Opportunities/ChartComponent.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Radar, Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrazione dei componenti necessari di ChartJS
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = ({ type, data }) => {
  const renderChart = () => {
    switch (type) {
      case 'radar':
        return <Radar data={data} />;
      case 'line':
        return <Line data={data} />;
      case 'bar':
        return <Bar data={data} />;
      default:
        return <Typography variant="body1">Tipo grafico non supportato</Typography>;
    }
  };

  return (
    <Box sx={{ border: '1px solid #ddd', padding: 2, textAlign: 'center', marginBottom: 20 }}>
      {renderChart()}
    </Box>
  );
};

export default ChartComponent;
