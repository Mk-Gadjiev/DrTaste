// FeaturesSection.js
import React from 'react';
import { Grid, Card, CardContent, Typography, Container, Box } from '@mui/material';
import { DataUsage, Psychology, People, Assessment } from '@mui/icons-material';

const features = [
  {
    title: "Neuromarketing",
    description: "Analisi avanzate delle preferenze dei consumatori.",
    icon: <Psychology fontSize="large" sx={{ color: '#1E88E5' }} />, // Colore blu vivo
  },
  {
    title: "Data Integration",
    description: "Integrazione di dati social e vendite.",
    icon: <DataUsage fontSize="large" sx={{ color: '#43A047' }} />, // Colore verde
  },
  {
    title: "Personas Matching",
    description: "Gemelli digitali per target più precisi.",
    icon: <People fontSize="large" sx={{ color: '#F4511E' }} />, // Colore arancione
  },
  {
    title: "Concept Testing",
    description: "Sperimentazione rapida di nuovi prodotti.",
    icon: <Assessment fontSize="large" sx={{ color: '#8E24AA' }} />, // Colore viola
  },
];

function FeaturesSection() {
  return (
    <Box sx={{ py: 6, bgcolor: 'linear-gradient(180deg, #f5f5f5 0%, #e0e0e0 100%)' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h4" 
          align="center" 
          gutterBottom 
          sx={{ fontWeight: 'bold', color: 'text.primary', mb: 4 }}
        >
          Le nostre Caratteristiche
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  p: 2,
                  textAlign: 'center',
                  boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
                  borderRadius: '12px', // Aggiunto bordo arrotondato
                  transition: 'transform 0.4s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.08)',
                    boxShadow: '0px 10px 24px rgba(0, 0, 0, 0.25)',
                  },
                }}
              >
                <Box sx={{ mb: 1 }}>{feature.icon}</Box>
                <CardContent>
                  <Typography 
                    gutterBottom 
                    variant="h6" 
                    component="div" 
                    sx={{ fontWeight: '500', color: 'text.primary' }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default FeaturesSection;






