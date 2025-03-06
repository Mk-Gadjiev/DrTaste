// src/Components/Opportunities/InterestingIngredients.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import ChartComponent from './ChartComponent';

const InterestingIngredients = ({ topIngredients, pairingData, neuroImpact }) => {
  return (
    <Box>
      <Typography variant="subtitle1">Ingredienti Più Utilizzati</Typography>
      <ChartComponent type="bar" data={topIngredients} />

      <Typography variant="subtitle1" sx={{ mt: 2 }}>Grafico di Accoppiamento</Typography>
      <Box sx={{ border: '1px solid #ddd', padding: 2, textAlign: 'center' }}>
        <Typography variant="body1">PairingGraph</Typography>
        <pre>{JSON.stringify(pairingData, null, 2)}</pre>
      </Box>

      {neuroImpact && (
        <>
          <Typography variant="subtitle1" sx={{ mt: 2 }}>Impatto Neuromarketing</Typography>
          <ChartComponent type="bar" data={neuroImpact} />
        </>
      )}
    </Box>
  );
};

export default InterestingIngredients;

