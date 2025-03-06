import React from 'react';
import { Box, Card, CardContent, Typography, Grid, Button } from '@mui/material';

function IdeaDashboard({ ideaName, ideaDescription, insights, onDeepDive }) {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
        Dashboard Generale dell'Idea
      </Typography>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" sx={{ mb: 1 }}>
            {ideaName}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {ideaDescription}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: "#e3f2fd", p: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Valutazione Sensoriale
                </Typography>
                <Typography variant="body2">
                  {insights.sensorial ? insights.sensorial : "Non disponibile"}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: "#fff3e0", p: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Insights di Mercato
                </Typography>
                <Typography variant="body2">
                  {insights.aiInsights ? insights.aiInsights : "Non disponibile"}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: "#fce4ec", p: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Neuromarketing Insights
                </Typography>
                <Typography variant="body2">
                  {insights.neuromarketing ? insights.neuromarketing : "Non disponibile"}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: "#e8f5e9", p: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Mappa Concettuale
                </Typography>
                <Typography variant="body2">
                  {insights.conceptualMap ? "Mappa generata" : "Non disponibile"}
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Approfondisci le analisi:
        </Typography>
        <Button variant="contained" onClick={() => onDeepDive("Valutazione Sensoriale")} sx={{ mr: 1 }}>
          Valutazione Sensoriale
        </Button>
        <Button variant="contained" onClick={() => onDeepDive("Insights Generati dall'AI")} sx={{ mr: 1 }}>
          Insights di Mercato
        </Button>
        <Button variant="contained" onClick={() => onDeepDive("Neuromarketing Insights")} sx={{ mr: 1 }}>
          Neuromarketing Insights
        </Button>
        <Button variant="contained" onClick={() => onDeepDive("Conceptual Map")}>
          Mappa Concettuale
        </Button>
      </Box>
    </Box>
  );
}

export default IdeaDashboard;

