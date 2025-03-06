// Components/ConceptTestingPage.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  MenuItem,
  Select,
  TextField,
  Grid,
} from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Radar } from 'react-chartjs-2';

const ConceptTestingPage = () => {
  const location = useLocation();
  const concept = location.state?.concept;

  const [targetGroup, setTargetGroup] = useState('Giovani (18-25)');
  const [qualitativeQuestions, setQualitativeQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');

  const recommendation = 'Considera di migliorare l’innovazione per competere meglio con i benchmark.';

  const [simulationResults] = useState({
    gradimento: 85,
    intenzioneAcquisto: 70,
    rilevanza: 90,
    innovazione: 60,
    sostenibilita: 75,
  });

  if (!concept) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h5">Errore: nessun concept selezionato.</Typography>
        <Typography variant="body1">
          Per testare un concept, torna alla dashboard e seleziona un'idea.
        </Typography>
      </Box>
    );
  }

  const handleTargetGroupChange = (event) => {
    setTargetGroup(event.target.value);
  };

  const handleStartSimulation = () => {
    alert(`Simulazione avviata per il target: ${targetGroup}`);
  };

  const handleQuestionSubmit = () => {
    if (newQuestion.trim()) {
      setQualitativeQuestions([...qualitativeQuestions, newQuestion]);
      setNewQuestion('');
    }
  };

  const barData = {
    labels: ['Gradimento', 'Intenzione di Acquisto', 'Rilevanza'],
    datasets: [
      {
        label: 'Punteggi (%)',
        data: [
          simulationResults.gradimento,
          simulationResults.intenzioneAcquisto,
          simulationResults.rilevanza,
        ],
        backgroundColor: ['#673ab7', '#4caf50', '#ffb74d'],
      },
    ],
  };

  const radarData = {
    labels: [
      'Gradimento',
      'Intenzione di Acquisto',
      'Rilevanza',
      'Innovazione',
      'Sostenibilità',
    ],
    datasets: [
      {
        label: 'Concept Testato',
        data: [
          simulationResults.gradimento,
          simulationResults.intenzioneAcquisto,
          simulationResults.rilevanza,
          simulationResults.innovazione,
          simulationResults.sostenibilita,
        ],
        backgroundColor: 'rgba(103, 58, 183, 0.2)',
        borderColor: '#673ab7',
        borderWidth: 1,
      },
      {
        label: 'Benchmark',
        data: [75, 65, 80, 70, 65],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Concept Testing
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Benvenuto nella pagina di Concept Testing per l'idea selezionata.
      </Typography>

      <Card sx={{ mt: 3, mb: 4 }}>
        <CardContent>
          <Typography variant="h5">{concept.name}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {concept.description}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            File caricato: {concept.fileName || 'Nessun file'}
          </Typography>
        </CardContent>
      </Card>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6">Seleziona Target di Test</Typography>
        <Select
          value={targetGroup}
          onChange={handleTargetGroupChange}
          fullWidth
          sx={{ mt: 2 }}
        >
          <MenuItem value="Giovani (18-25)">👥 Giovani (18-25)</MenuItem>
          <MenuItem value="Adulti (26-40)">📁 Adulti (26-40)</MenuItem>
          <MenuItem value="Senior (40+)">🧓 Senior (40+)</MenuItem>
        </Select>
      </Box>

      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Button
          variant="contained"
          onClick={handleStartSimulation}
          sx={{ backgroundColor: '#3f51b5', color: 'white' }}
        >
          Avvia Simulazione
        </Button>
      </Box>

      <Box>
        <Typography variant="h6">Risultati della Simulazione</Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Bar data={barData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Radar data={radarData} />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Raccomandazioni</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {recommendation}
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Ricerca Qualitativa</Typography>
        {qualitativeQuestions.map((question, index) => (
          <Typography
            key={index}
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1 }}
          >
            Domanda: {question}
          </Typography>
        ))}
        <TextField
          fullWidth
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Scrivi una domanda..."
          sx={{ mt: 2 }}
        />
        <Button
          variant="contained"
          onClick={handleQuestionSubmit}
          sx={{ mt: 2, backgroundColor: '#3f51b5', color: 'white' }}
        >
          Invia
        </Button>
      </Box>
    </Box>
  );
};

export default ConceptTestingPage;











