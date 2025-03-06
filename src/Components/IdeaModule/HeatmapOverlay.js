import React from 'react';
import { Box } from '@mui/material';

const HeatmapOverlay = ({ packagingUrl }) => {
  return (
    <Box sx={{ position: 'relative', width: '600px', height: '300px', border: '2px solid blue' }}>
      {/* Immagine del prodotto */}
      <Box
        component="img"
        src={packagingUrl}
        alt="Packaging del prodotto"
        sx={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 2 }}
      />
      {/* Overlay Heatmap con gradiente radiale */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: 2,
          background: 'radial-gradient(circle at 50% 30%, rgba(255,0,0,0.5), transparent 60%), radial-gradient(circle at 70% 70%, rgba(255,165,0,0.5), transparent 60%)',
          opacity: 0.8,
        }}
      />
    </Box>
  );
};

export default HeatmapOverlay;

