import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Typography, Box } from '@mui/material';

function SensorialEvaluation({ sensorialData }) {
  if (!sensorialData || !sensorialData.labels || !sensorialData.datasets) {
    return (
      <Typography variant="body1" color="error">
        Dati sensoriali non disponibili.
      </Typography>
    );
  }

  return (
    <Box>
      <Typography variant="h5" align="center" gutterBottom>
        Analisi Sensoriale del Concept
      </Typography>
      <Radar
        data={sensorialData}
        options={{
          maintainAspectRatio: true,
          scales: {
            r: {
              ticks: {
                stepSize: 1,
                color: '#000',
              },
            },
          },
        }}
        style={{ maxHeight: '300px', marginBottom: '20px' }}
      />
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Approfondimenti sui Parametri Sensoriali
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              <strong>Gusto:</strong> Migliore parametro con un punteggio di <strong>8/10</strong>. Il 90% dei tester lo ha apprezzato.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Texture:</strong> Punteggio di <strong>7/10</strong>. Il 70% dei tester suggerisce una maggiore croccantezza.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Aroma:</strong> Considerato "piacevole" dall'<strong>85%</strong> dei partecipanti. Il profumo naturale è un punto di forza.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Aspetto Visivo:</strong> Valutato eccellente dall'<strong>85%</strong> dei partecipanti per i colori naturali e il design accattivante.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Esperienza Complessiva:</strong> Punteggio medio di <strong>8/10</strong>. I tester hanno lodato l'equilibrio tra gusto e design.
            </Typography>
          </li>
        </ul>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Punti di Miglioramento
        </Typography>
        <Typography variant="body1" gutterBottom>
          Sulla base dei feedback, ecco alcune aree di miglioramento:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              Aumentare la croccantezza per migliorare la texture.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Ottimizzare l'intensità dell'aroma per attirare più consumatori.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Esplorare opzioni di confezionamento per migliorare l'aspetto visivo.
            </Typography>
          </li>
        </ul>
      </Box>
    </Box>
  );
}

export default SensorialEvaluation;








