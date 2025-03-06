import React from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import HeatmapOverlay from './HeatmapOverlay';

function NeuromarketingInsights({ data, onSimulate }) {
  return (
    <Card sx={{ mb: 3, p: 3, backgroundColor: '#f8f9fa' }}>
      <CardContent>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          Neuromarketing Insights: Reazioni Psicologiche
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Questa analisi integrata offre una visione approfondita su come il prodotto stimoli le risposte emotive e cognitive dei consumatori, influenzando la loro percezione e decisione d'acquisto.
        </Typography>
        
        {/* Sezione Eye Tracking */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Eye Tracking
          </Typography>
          <Typography variant="body2">
            {data.eyeTracking.description}
          </Typography>
          <HeatmapOverlay packagingUrl={data.eyeTracking.heatmapUrl} />
        </Box>
        
        {/* Sezione Riconoscimento Facciale */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Riconoscimento Facciale
          </Typography>
          <Typography variant="body2">
            {data.facialExpressions.description}
          </Typography>
          <Box
            component="img"
            src={data.facialExpressions.chartUrl}
            alt="Facial Expression Chart"
            sx={{ width: '50%', borderRadius: 2, mt: 1 }}
          />
        </Box>
        
        {/* Sezione EEG Simulato */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Attività EEG
          </Typography>
          <Typography variant="body2">
            {data.EEG.description}
          </Typography>
          <Box
            component="img"
            src={data.EEG.chartUrl}
            alt="EEG Activity Chart"
            sx={{ width: '100%', borderRadius: 2, mt: 1 }}
          />
        </Box>
        
        {/* Sezione Sentiment Social Media */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Sentiment Social Media
          </Typography>
          <Typography variant="body2">
            {data.socialSentiment.description}
          </Typography>
          <Box
            component="img"
            src={data.socialSentiment.wordCloudUrl}
            alt="Social Media Sentiment Cloud"
            sx={{ width: '100%', borderRadius: 2, mt: 1 }}
          />
        </Box>
        
        <Typography variant="body2" sx={{ mb: 2, fontStyle: 'italic' }}>
          {data.overall}
        </Typography>
        
        <Button variant="contained" onClick={onSimulate}>
          Aggiorna Neuromarketing Insights
        </Button>
      </CardContent>
    </Card>
  );
}

export default NeuromarketingInsights;










