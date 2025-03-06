import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { Radar, Bar } from 'react-chartjs-2';

function MarketComparison() {
  // Dati statici per il grafico radar
  const radarData = {
    labels: ['Prezzo', 'Qualità', 'Innovazione', 'Visibilità a Scaffale', 'Sostenibilità'],
    datasets: [
      {
        label: 'Idea Corrente',
        data: [75, 85, 90, 80, 70],
        backgroundColor: 'rgba(34, 202, 236, 0.5)',
        borderColor: 'rgba(34, 202, 236, 1)',
        borderWidth: 1,
      },
      {
        label: 'Ferrero',
        data: [80, 90, 85, 95, 80],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Milka',
        data: [70, 75, 80, 85, 70],
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Dati statici per il grafico a barre (Benchmarking)
  const barData = {
    labels: ['Prezzo', 'Qualità', 'Innovazione', 'Apprezzamento sui Social', 'Sostenibilità'],
    datasets: [
      {
        label: 'Idea Corrente',
        data: [75, 85, 90, 78, 70],
        backgroundColor: 'rgba(34, 202, 236, 0.8)',
      },
      {
        label: 'Media di Mercato',
        data: [72, 78, 85, 74, 74],
        backgroundColor: 'rgba(153, 102, 255, 0.8)',
      },
    ],
  };

  // Dati statici dei competitor rilevanti
  const competitors = [
    {
      name: 'Ferrero',
      image: 'https://via.placeholder.com/150',
      description: 'Eccellenza nella qualità e innovazione, ma con un prezzo elevato.',
      price: '€5.49',
      visibility: 95,
      socialApproval: 88,
      nutrition: { calories: 530, sugar: 50, fat: 35, protein: 6 },
      packaging: 'Confezione regalo da 200g',
      needsState: 'Premium',
    },
    {
      name: 'Milka',
      image: 'https://via.placeholder.com/150',
      description: 'Alternativa economica con un buon equilibrio qualità-prezzo.',
      price: '€3.79',
      visibility: 85,
      socialApproval: 80,
      nutrition: { calories: 550, sugar: 55, fat: 33, protein: 5 },
      packaging: 'Tavoletta 100g',
      needsState: 'Affordable Indulgence',
    },
    {
      name: 'Mulino Bianco',
      image: 'https://via.placeholder.com/150',
      description: 'Forte attenzione alla sostenibilità e al target familiare.',
      price: '€4.29',
      visibility: 90,
      socialApproval: 89,
      nutrition: { calories: 480, sugar: 40, fat: 20, protein: 7 },
      packaging: 'Pacchetto da 250g',
      needsState: 'Family Comfort',
    },
    {
      name: 'Loacker',
      image: 'https://via.placeholder.com/150',
      description: 'Specializzato in prodotti naturali e leggeri, molto apprezzato.',
      price: '€4.99',
      visibility: 88,
      socialApproval: 85,
      nutrition: { calories: 520, sugar: 45, fat: 30, protein: 8 },
      packaging: 'Multipack da 4 pezzi',
      needsState: 'Health-Conscious Indulgence',
    },
  ];

  return (
    <Box sx={{ p: 4, maxWidth: 1200, mx: 'auto' }}>
      {/* Titolo e descrizione */}
      <Typography variant="h4" align="center" gutterBottom>
        Market Comparison
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Analizza come la tua idea si posiziona rispetto ai competitor più rilevanti.
      </Typography>

      {/* Confronto Parametri */}
      <Box sx={{ mt: 4, mb: 4, p: 3, borderRadius: '8px', backgroundColor: '#ffffff' }}>
        <Typography variant="h6" gutterBottom>Confronto Parametri</Typography>
        <Box sx={{ maxWidth: 600, mx: 'auto' }}>
          <Radar
            data={radarData}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              aspectRatio: 1.5,
            }}
          />
        </Box>
      </Box>

      {/* Benchmarking */}
      <Box sx={{ mt: 4, mb: 4, p: 3, borderRadius: '8px', backgroundColor: '#ffffff' }}>
        <Typography variant="h6" gutterBottom>Benchmarking</Typography>
        <Typography variant="body2" gutterBottom>
          Differenze percentuali rispetto alla media di mercato per ciascun parametro.
        </Typography>
        <Box sx={{ maxWidth: 600, mx: 'auto' }}>
          <Bar
            data={barData}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              aspectRatio: 1.5,
            }}
          />
        </Box>
      </Box>

      {/* Competitor Rilevanti */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h6" gutterBottom>Competitor Rilevanti</Typography>
        <Grid container spacing={3}>
          {competitors.map((competitor, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card sx={{ mb: 3 }}>
                <CardMedia
                  component="img"
                  height="150"
                  image={competitor.image}
                  alt={competitor.name}
                />
                <CardContent>
                  <Typography variant="h6">{competitor.name}</Typography>
                  <Typography variant="body2">{competitor.description}</Typography>
                  <Typography variant="body2">Prezzo: {competitor.price}</Typography>
                  <Typography variant="body2">
                    Valori Nutrizionali: Calorie {competitor.nutrition.calories}, Zuccheri {competitor.nutrition.sugar}g,
                    Grassi {competitor.nutrition.fat}g, Proteine {competitor.nutrition.protein}g
                  </Typography>
                  <Typography variant="body2">Packaging: {competitor.packaging}</Typography>
                  <Typography variant="body2">Visibilità a Scaffale: {competitor.visibility}</Typography>
                  <Typography variant="body2">Apprezzamento Social: {competitor.socialApproval}</Typography>
                  <Typography variant="body2">Needs State: {competitor.needsState}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default MarketComparison;



















