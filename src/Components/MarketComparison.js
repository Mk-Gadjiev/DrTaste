import React from 'react';
import { Box, Typography } from '@mui/material';
import CompetitorList from '../Components/CompetitorList'; // Importa il nuovo componente CompetitorList
import { Radar } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';

function MarketComparison() {
  const radarData = {
    labels: ['Prezzo', 'Qualità', 'Innovazione', 'Apprezzamento sui Social', 'Sostenibilità'],
    datasets: [
      {
        label: 'Idea Corrente',
        data: [60, 70, 90, 80, 75],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
      },
      {
        label: 'Media di Mercato',
        data: [50, 65, 75, 70, 70],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
      },
    ],
  };

  const barData = {
    labels: ['Prezzo', 'Qualità', 'Innovazione', 'Apprezzamento sui Social', 'Sostenibilità'],
    datasets: [
      {
        label: 'Idea Corrente',
        data: [70, 80, 85, 75, 90],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Media di Mercato',
        data: [60, 70, 75, 65, 80],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <Box sx={{ p: 4, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Market Comparison
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Analizza come la tua idea si posiziona rispetto ai competitor più rilevanti.
      </Typography>

      {/* Grafici */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Confronto Parametri
        </Typography>
        <Radar data={radarData} />
        <Typography variant="h6" sx={{ mt: 4 }} gutterBottom>
          Benchmarking
        </Typography>
        <Bar data={barData} />
      </Box>

      {/* Competitor List */}
      <Box sx={{ mt: 4 }}>
        <CompetitorList concept="Idea Corrente" />
      </Box>
    </Box>
  );
}

export default MarketComparison;




