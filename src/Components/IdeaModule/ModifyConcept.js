import React from 'react';
import { Box, Select, MenuItem, Button, Typography } from '@mui/material';

function ModifyConcept({ onUpdate }) {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Modifica Concept
      </Typography>
      <Select fullWidth defaultValue="vaniglia" sx={{ mb: 2 }}>
        <MenuItem value="vaniglia">Vaniglia</MenuItem>
        <MenuItem value="cioccolato">Cioccolato</MenuItem>
        <MenuItem value="fragola">Fragola</MenuItem>
      </Select>
      <Button variant="contained" color="primary" onClick={onUpdate}>
        Aggiorna
      </Button>
    </Box>
  );
}

export default ModifyConcept;


