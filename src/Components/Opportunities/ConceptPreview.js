import React from 'react';
import { Box, Typography } from '@mui/material';

const ConceptPreview = ({ data }) => {
  return (
    <Box sx={{ border: '1px solid #ddd', padding: 2, marginBottom: 20 }}>
      <Typography variant="h6">{data.title}</Typography>
      <Typography variant="body1">{data.description}</Typography>
      <Typography variant="subtitle1">
        Ingredienti: {data.ingredients.join(', ')}
      </Typography>
      <Typography variant="subtitle2">
        Posizionamento: {data.positioning}
      </Typography>
    </Box>
  );
};

export default ConceptPreview;
