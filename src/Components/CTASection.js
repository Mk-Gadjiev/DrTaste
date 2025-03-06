import React from 'react';
import { Container, Button, Typography, Box } from '@mui/material';

function CTASection() {
  return (
    <Box sx={{ bgcolor: 'primary.dark', py: 5, color: 'white', textAlign: 'center' }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Sei pronto a innovare?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Contattaci per scoprire come Dr. Taste può aiutarti a portare i tuoi prodotti al livello successivo.
        </Typography>
        <Button variant="contained" color="secondary" size="large" sx={{ mt: 3 }}>
          Richiedi una Demo
        </Button>
      </Container>
    </Box>
  );
}

export default CTASection;
