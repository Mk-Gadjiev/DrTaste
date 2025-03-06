import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';

const benefits = [
  { title: "Riduzione del Time-to-Market", description: "Accelera lo sviluppo dei prodotti riducendo i tempi di validazione." },
  { title: "Riduzione dei Rischi", description: "Riduci i tassi di fallimento dei nuovi prodotti grazie a test avanzati." },
  { title: "Personalizzazione Elevata", description: "Utilizza gemelli digitali per simulare preferenze specifiche dei consumatori target." },
];

function WhyChooseUsSection() {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Perché Scegliere Dr. Taste
      </Typography>
      <Grid container spacing={4}>
        {benefits.map((benefit, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box sx={{ textAlign: 'center', padding: 2, bgcolor: 'primary.light', color: 'white', borderRadius: 1 }}>
              <Typography variant="h6" gutterBottom>
                {benefit.title}
              </Typography>
              <Typography variant="body2">
                {benefit.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default WhyChooseUsSection;
