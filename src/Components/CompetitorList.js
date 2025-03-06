import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Divider, Box } from '@mui/material';

const CompetitorList = ({ competitors }) => {
  return (
    <Grid container spacing={3} sx={{ mt: 4 }}>
      {competitors.map((competitor, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          <Card
            sx={{
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              borderRadius: '16px',
              border: '1px solid #e0e0e0',
              overflow: 'hidden',
              background: 'linear-gradient(145deg, #ffffff, #f3f3f3)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%', // Altezza automatica e uniforme
            }}
          >
            <CardMedia
              component="img"
              height="150"
              image={competitor.image}
              alt={competitor.name}
              sx={{ objectFit: 'cover' }}
            />
            <CardContent
              sx={{
                p: 3,
                flex: '1 0 auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                  {competitor.brand}{' '}
                  <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
                    ({competitor.company})
                  </Typography>
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 2,
                    color: 'text.secondary',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {competitor.description}
                </Typography>
                <Divider sx={{ my: 2, backgroundColor: '#ddd' }} />
                <Typography variant="body2">
                  <strong>Scaffale di Riferimento:</strong> {competitor.shelf}
                </Typography>
                <Typography variant="body2">
                  <strong>Flavour:</strong> {competitor.flavour}
                </Typography>
                <Typography variant="body2">
                  <strong>Peso e Formato:</strong> {competitor.weight}
                </Typography>
                <Typography variant="body2">
                  <strong>Prezzo:</strong> {competitor.price} (€{(competitor.price / competitor.weightValue * 100).toFixed(2)} / 100g)
                </Typography>
                <Divider sx={{ my: 2, backgroundColor: '#ddd' }} />
                <Typography variant="body2"><strong>Claim Front-of-Pack:</strong> {competitor.frontClaims}</Typography>
                <Typography variant="body2"><strong>Claim Back-of-Pack:</strong> {competitor.backClaims}</Typography>
                <Divider sx={{ my: 2, backgroundColor: '#ddd' }} />
                <Typography variant="body2">
                  <strong>Need State:</strong> {competitor.needState}
                </Typography>
                <Typography variant="body2">
                  <strong>Momento di Consumo:</strong> {competitor.consumptionMoment}
                </Typography>
                <Typography variant="body2">
                  <strong>USP:</strong> {competitor.usp}
                </Typography>
                <Typography variant="body2">
                  <strong>Target Demografico:</strong> {competitor.target}
                </Typography>
                <Typography variant="body2">
                  ♻️ <strong>Packaging Sostenibile:</strong> {competitor.sustainablePackaging}
                </Typography>
              </Box>
              <Divider sx={{ my: 2, backgroundColor: '#ddd' }} />
              <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                Commenti Social:
              </Typography>
              <Box
                sx={{
                  maxHeight: '80px', // Altezza massima
                  overflow: 'hidden', // Nasconde contenuto extra
                  textOverflow: 'ellipsis',
                }}
              >
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {competitor.socialComments.map((comment, idx) => (
                    <li key={idx} style={{ marginBottom: '5px', color: '#555' }}>
                      "{comment}"
                    </li>
                  ))}
                </ul>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CompetitorList;









