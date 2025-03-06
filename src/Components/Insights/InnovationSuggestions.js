// src/Components/Insights/InnovationSuggestions.js
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

function InnovationSuggestions({ suggestions, title }) {
  return (
    <Box className="insight-section" sx={{ maxWidth: 600 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        {title || 'Suggerimenti Innovativi'}
      </Typography>
      <List>
        {suggestions.map((suggestion, index) => (
          <ListItem key={index}>
            <ListItemText primary={suggestion} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default InnovationSuggestions;

