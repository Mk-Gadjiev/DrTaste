import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

function IdeaScoring() {
  const scoringCriteria = [
    { label: 'Innovazione', score: 85 },
    { label: 'Attrattività', score: 90 },
    { label: 'Sostenibilità', score: 80 },
    { label: 'Realizzabilità', score: 75 },
  ];

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" align="center" gutterBottom>
        Scoring del Concept
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {scoringCriteria.map((criterion, index) => (
          <Grid item xs={6} key={index}>
            <Typography variant="body1">
              <strong>{criterion.label}:</strong> {criterion.score}/100
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default IdeaScoring;

