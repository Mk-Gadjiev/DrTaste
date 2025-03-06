import React from 'react';
import { Box, Typography } from '@mui/material';

function InsightsAI({ insights }) {
  if (!insights || insights.length === 0) {
    return (
      <Typography variant="body1" align="center" color="textSecondary">
        Nessun insight disponibile.
      </Typography>
    );
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" align="center" gutterBottom>
        Insights Generati dall'AI
      </Typography>
      {insights.map((insight, index) => (
        <Box key={index} sx={{ mb: 2, p: 2, border: '1px solid #ddd', borderRadius: '8px' }}>
          <Typography variant="h6" gutterBottom>
            {insight.category}
          </Typography>
          <ul>
            {insight.items.map((item, idx) => (
              <li key={idx}>
                <Typography variant="body2">{item}</Typography>
              </li>
            ))}
          </ul>
        </Box>
      ))}
    </Box>
  );
}

export default InsightsAI;





