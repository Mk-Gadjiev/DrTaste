// src/Components/Opportunities/NeedStatesFlavours.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import ChartComponent from './ChartComponent';

const NeedStatesFlavours = ({ needStates, flavorPreferences, neuroFlavors }) => {
  return (
    <Box>
      <Typography variant="subtitle1">Distribuzione Need States</Typography>
      <ChartComponent type="bar" data={needStates} />

      <Typography variant="subtitle1" sx={{ mt: 2 }}>Flavour Preferiti</Typography>
      <ChartComponent type="bar" data={flavorPreferences} />

      {neuroFlavors && (
        <>
          <Typography variant="subtitle1" sx={{ mt: 2 }}>Impatto Neuromarketing sui Sapori</Typography>
          <ChartComponent type="bar" data={neuroFlavors} />
        </>
      )}
    </Box>
  );
};

export default NeedStatesFlavours;

