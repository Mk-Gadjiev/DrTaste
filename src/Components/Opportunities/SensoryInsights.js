// SensoryInsights.js
import React from 'react';
import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import ChartCard from './ChartCard';

const SensoryInsights = ({ sensorialData, emotionData, demographicData, consumerPreferences }) => {
  return (
    <Box sx={{ my: 4, px: 2 }}>
      {/* Profilo Sensoriale */}
      <Typography variant="h6" align="center" gutterBottom>
        Profilo Sensoriale
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ChartCard
            title="Grafico Profilo Sensoriale"
            type="radar"
            data={sensorialData}
            description="Il grafico mostra la distribuzione dei gusti."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ margin: 2 }}>
            <CardContent>
              <Typography variant="subtitle1" align="center">
                Statistiche Chiave
              </Typography>
              <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                • Dolce: 70% <br />
                • Acido: 60% <br />
                • Amaro: 50% <br />
                • Salato: 80% <br />
                • Umami: 65%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Heatmap Emotiva */}
      <Typography variant="h6" align="center" gutterBottom sx={{ mt: 4 }}>
        Heatmap Emotiva
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ChartCard
            title="Grafico Emozioni"
            type="bar"
            data={emotionData}
            description="Le emozioni predominanti sono Felicità e Calma."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ margin: 2 }}>
            <CardContent>
              <Typography variant="subtitle1" align="center">
                Analisi Emotiva
              </Typography>
              <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                L'analisi mostra che la maggior parte degli utenti percepisce un forte impatto positivo con prevalenza di Felicità e Calma.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Preferenze per Target */}
      <Typography variant="h6" align="center" gutterBottom sx={{ mt: 4 }}>
        Preferenze per Target
      </Typography>
      <ChartCard
        title="Grafico Preferenze Target"
        type="bar"
        data={demographicData}
        description="Il grafico evidenzia come il target di giovani risponda maggiormente."
      />

      {/* Consumer Preferences */}
      <Typography variant="h6" align="center" gutterBottom sx={{ mt: 4 }}>
        Consumer Preferences
      </Typography>
      <Card variant="outlined" sx={{ margin: 2 }}>
        <CardContent>
          <Typography variant="subtitle1" align="center">
            Informazioni di Consumer Preferences
          </Typography>
          {consumerPreferences && consumerPreferences.length > 0 ? (
            <List>
              {consumerPreferences.map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemText primary={item.preference} secondary={item.detail} />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography variant="body2" align="center">
              Nessuna informazione disponibile.
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default SensoryInsights;










