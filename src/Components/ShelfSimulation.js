import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

// Simulazione dati dei prodotti
const shelfData = [
  [
    { name: 'Idea Corrente', price: 3.99, image: 'https://via.placeholder.com/100', isMain: true },
    { name: 'Competitor A', price: 4.49, image: 'https://via.placeholder.com/100' },
    { name: 'Competitor B', price: 3.79, image: 'https://via.placeholder.com/100' },
    { name: 'Competitor C', price: 4.29, image: 'https://via.placeholder.com/100' },
  ],
  [
    { name: 'Competitor D', price: 2.99, image: 'https://via.placeholder.com/100' },
    { name: 'Competitor E', price: 4.99, image: 'https://via.placeholder.com/100' },
    { name: 'Competitor F', price: 3.49, image: 'https://via.placeholder.com/100' },
    { name: 'Competitor G', price: 3.99, image: 'https://via.placeholder.com/100' },
  ],
];

function ShelfSimulation() {
  return (
    <Box
      sx={{
        mt: 4,
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        p: 2,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Titolo della sezione */}
      <Typography variant="h6" align="center" gutterBottom>
        Simulazione dello Scaffale
      </Typography>
      <Typography variant="body2" align="center" gutterBottom>
        Visualizza la tua idea accanto ai competitor in uno scaffale simulato.
      </Typography>

      {/* Contenitore dello scaffale */}
      <Box
        sx={{
          backgroundImage: 'none', // Nessuno sfondo
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '8px',
          p: 3,
        }}
      >
        {shelfData.map((shelf, shelfIndex) => (
          <Grid
            container
            spacing={2}
            key={shelfIndex}
            sx={{
              mb: shelfIndex !== shelfData.length - 1 ? 4 : 0, // Spazio tra i ripiani
            }}
          >
            {shelf.map((product, index) => (
              <Grid
                item
                xs={3}
                key={index}
                sx={{
                  textAlign: 'center',
                  border: product.isMain ? '2px solid gold' : '1px solid #ccc',
                  padding: '8px',
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  position: 'relative',
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    marginBottom: '8px',
                  }}
                />
                <Typography variant="body1" fontWeight="bold">
                  {product.name}
                </Typography>
                <Typography variant="body2">Prezzo: €{product.price.toFixed(2)}</Typography>
              </Grid>
            ))}
          </Grid>
        ))}
      </Box>
    </Box>
  );
}

export default ShelfSimulation;

