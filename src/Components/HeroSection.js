// HeroSection.js
import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

function HeroSection() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        color: 'white',
        py: 10,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Innovazione nel Food & Beverage
        </Typography>
        <Typography variant="h5" gutterBottom>
          Scopri come Dr. Taste utilizza il neuromarketing e l'analisi dei dati per rivoluzionare il settore F&B.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 3 }}
        >
          Scopri di più
        </Button>
      </Container>
    </Box>
  );
}

export default HeroSection;




