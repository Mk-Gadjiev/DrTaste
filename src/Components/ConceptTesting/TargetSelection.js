import React from 'react';
import { Select, MenuItem, Box, Typography } from '@mui/material';

const TargetSelection = ({ targetGroup, onTargetChange }) => {
  return (
    <Box>
      <Typography variant="h6">Seleziona Target di Test</Typography>
      <Select
        value={targetGroup}
        onChange={(e) => onTargetChange(e.target.value)}
        fullWidth
        sx={{ mt: 2 }}
      >
        <MenuItem value="Giovani (18-25)">👥 Giovani (18-25)</MenuItem>
        <MenuItem value="Adulti (26-40)">📁 Adulti (26-40)</MenuItem>
        <MenuItem value="Senior (40+)">🧓 Senior (40+)</MenuItem>
      </Select>
    </Box>
  );
};

export default TargetSelection;
