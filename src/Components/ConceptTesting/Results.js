import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Grid } from '@mui/material';
import { Bar, Radar } from 'react-chartjs-2';

const Results = () => {
  const location = useLocation();
  const { config, type } = location.state || {}; // Ricevi i dati dalla navigazione

  if (!config || !type) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h5">Errore: nessun risultato disponibile.</Typography>
        <Typography variant="body1">
          Torna alla configurazione del test e riprova a simulare.
        </Typography>
      </Box>
    );
  }

  // Genera i risultati basati sulla configurazione
  const generateSurveyResults = () => ({
    gradimento: Math.floor(Math.random() * 20) + 80, // 80-100%
    innovazione: Math.floor(Math.random() * 30) + 70, // 70-100%
    sostenibilita: config.topics.includes('sostenibilità') ? 90 : Math.floor(Math.random() * 50) + 50,
    intenzioneAcquisto: Math.floor(Math.random() * 50) + 50, // 50-100%
  });

  const generateFocusGroupResults = () => [
    { tema: 'Gusto', commenti: 'Il gusto è stato apprezzato dalla maggioranza.' },
    { tema: 'Prezzo', commenti: 'Il prezzo è percepito alto rispetto alla qualità percepita.' },
    { tema: 'Sostenibilità', commenti: 'Feedback positivo per le pratiche sostenibili.' },
    { tema: 'Packaging', commenti: 'Il design del packaging potrebbe essere migliorato.' },
  ];

  const generateInteractionResults = () => ({
    decisioni: Math.floor(Math.random() * 5) + 1, // Da 1 a 5 decisioni simulate
    engagement: Math.floor(Math.random() * 30) + 70, // 70-100%
    ripetizioneAcquisto: Math.floor(Math.random() * 20) + 80, // 80-100%
  });

  // Genera i risultati in base al tipo
  const surveyResults = type === 'survey' ? generateSurveyResults() : null;
  const focusGroupResults = type === 'focusGroup' ? generateFocusGroupResults() : null;
  const interactionResults = type === 'directInteraction' ? generateInteractionResults() : null;

  // Dati per i grafici (survey)
  const barData = {
    labels: ['Gradimento', 'Innovazione', 'Sostenibilità', 'Intenzione di Acquisto'],
    datasets: [
      {
        label: 'Punteggi (%)',
        data: surveyResults ? Object.values(surveyResults) : [],
        backgroundColor: ['#673ab7', '#4caf50', '#ffb74d', '#2196f3'],
      },
    ],
  };

  const radarData = {
    labels: ['Gradimento', 'Innovazione', 'Sostenibilità', 'Intenzione di Acquisto'],
    datasets: [
      {
        label: 'Punteggi del Test',
        data: surveyResults ? Object.values(surveyResults) : [],
        backgroundColor: 'rgba(103, 58, 183, 0.2)',
        borderColor: '#673ab7',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box sx={{ p: 4, maxWidth: 1000, mx: 'auto' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Risultati della Simulazione
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Analisi dei risultati generati in base alla configurazione del test.
      </Typography>

      {/* Risultati per Survey */}
      {type === 'survey' && (
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" align="center" gutterBottom>
              Distribuzione dei Punteggi
            </Typography>
            <Bar data={barData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" align="center" gutterBottom>
              Analisi Radar
            </Typography>
            <Radar data={radarData} />
          </Grid>
        </Grid>
      )}

      {/* Risultati per Focus Group */}
      {type === 'focusGroup' && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Feedback del Focus Group
          </Typography>
          {focusGroupResults.map((result, index) => (
            <Box key={index} sx={{ mt: 2 }}>
              <Typography variant="body1">
                <strong>{result.tema}:</strong> {result.commenti}
              </Typography>
            </Box>
          ))}
        </Box>
      )}

      {/* Risultati per Interazione Diretta */}
      {type === 'directInteraction' && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Risultati dell'Interazione Diretta
          </Typography>
          <Typography variant="body1">
            <strong>Decisioni prese:</strong> {interactionResults.decisioni}
          </Typography>
          <Typography variant="body1">
            <strong>Engagement:</strong> {interactionResults.engagement}%
          </Typography>
          <Typography variant="body1">
            <strong>Ripetizione Acquisto:</strong> {interactionResults.ripetizioneAcquisto}%
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Results;


