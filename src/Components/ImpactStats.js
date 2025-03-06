// ImpactStats.js
import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';

function ImpactStats() {
  const stats = [
    { title: "Progetti completati", value: "120+" },
    { title: "Clienti soddisfatti", value: "95%" },
    { title: "Tempo di sviluppo ridotto", value: "30%" },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Il Nostro Impatto
      </Typography>
      <Grid container spacing={4}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box sx={{ textAlign: "center", p: 2 }}>
              <Typography variant="h3" color="primary" fontWeight="bold">
                {stat.value}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {stat.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ImpactStats;
