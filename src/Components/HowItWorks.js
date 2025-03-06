// HowItWorks.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const steps = [
  { step: "1", title: "Analisi dei Dati", description: "Raccogliamo dati dai canali social e dalle vendite per un'analisi completa." },
  { step: "2", title: "Test del Concetto", description: "Simuliamo la reazione dei consumatori tramite gemelli digitali e test avanzati." },
  { step: "3", title: "Ottimizzazione", description: "Forniamo insight utili per affinare il concept prima del lancio." }
];

function HowItWorks() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Come Funziona
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {steps.map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card sx={{ textAlign: 'center', py: 3 }}>
              <CardContent>
                <Typography variant="h3" color="primary">
                  {item.step}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HowItWorks;

