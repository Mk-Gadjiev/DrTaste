// src/Components/Opportunities/ConceptGeneratorSection.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import ChartComponent from './ChartComponent';

const ConceptGeneratorSection = ({ selectedTrend, conceptData }) => {
  return (
    <Box>
      <Typography variant="subtitle1">Genera Concept</Typography>
      <Box sx={{ border: '1px solid #ddd', padding: 2, textAlign: 'center' }}>
        <Typography variant="body1">ConceptGenerator</Typography>
        <Typography variant="body2">Trend: {selectedTrend.trend}</Typography>
      </Box>

      <Typography variant="subtitle1" sx={{ mt: 2 }}>Anteprima Concept</Typography>
      <Box sx={{ border: '1px solid #ddd', padding: 2 }}>
        <Typography variant="h6">{conceptData.title}</Typography>
        <Typography variant="body1">{conceptData.description}</Typography>
        <Typography variant="subtitle1">
          Ingredienti: {conceptData.ingredients.join(', ')}
        </Typography>
        <Typography variant="subtitle2">
          Posizionamento: {conceptData.positioning}
        </Typography>
      </Box>
    </Box>
  );
};

export default ConceptGeneratorSection;



