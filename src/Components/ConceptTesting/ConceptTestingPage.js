
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Select, MenuItem, TextField, Checkbox, FormControlLabel } from '@mui/material';
import TestConfigurationDashboard from './TestConfigurationDashboard';  
import { fetchSurveyResponse } from '../../chatgptSurveyAPI';

const ConceptTestingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const concept = location.state?.concept;

  const [targetDetails, setTargetDetails] = useState({
    ageGroup: '',
    gender: '',
    education: '',
    profession: '',
    income: '',
    habits: [],
    additionalInfo: '',
  });

  const [researchType, setResearchType] = useState('');
  const [showTestConfigDashboard, setShowTestConfigDashboard] = useState(false);
  const [surveyQuestions, setSurveyQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleTargetChange = (field, value) => {
    setTargetDetails({ ...targetDetails, [field]: value });
  };

  const handleHabitChange = (habit) => {
    const updatedHabits = targetDetails.habits.includes(habit)
      ? targetDetails.habits.filter((h) => h !== habit)
      : [...targetDetails.habits, habit];

    setTargetDetails({ ...targetDetails, habits: updatedHabits });
  };

  const handleResearchTypeChange = (event) => {
    setResearchType(event.target.value);
    setShowTestConfigDashboard(false);
  };

  const handleOpenConfigDashboard = () => {
    setShowTestConfigDashboard(true);
  };

  const handleSurveyGenerated = async (questions) => {
    setSurveyQuestions(questions);
    if (researchType === 'survey') {
      setLoading(true);
      const targetDescription = `${targetDetails.ageGroup}, ${targetDetails.profession}, abitudini: ${targetDetails.habits.join(', ')}`;

      console.log("📌 Dati generati per la Survey:", questions);

      const generatedResponses = await Promise.all(
        questions.map(async (question) => {
          const response = await fetchSurveyResponse(question.text, targetDescription, "results");
          return { question: question.text, response };
        })
      );

      setSurveyQuestions(generatedResponses);
      setLoading(false);
    }
  };

  const handleSimulateSurvey = () => {
    console.log("📌 Dati generati per la Survey:", surveyQuestions);
    if (!surveyQuestions || surveyQuestions.length === 0) {
        console.error("❌ Nessuna risposta disponibile, impossibile navigare!");
        return;
    }
    navigate('/results', {
      state: { surveyQuestions }
    });
    console.log("📩 Navigazione con dati:", { surveyQuestions });
  };

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

  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h4" align="center" gutterBottom>
        🎯 <strong>Seleziona il Target</strong>
      </Typography>

      {/* Sezione di selezione del Target */}
      <Typography variant="body2" sx={{ mt: 1 }}>Fascia d'età:</Typography>
      <Select value={targetDetails.ageGroup} onChange={(e) => handleTargetChange('ageGroup', e.target.value)} fullWidth sx={{ mt: 2 }}>
        <MenuItem value="18-25">18-25</MenuItem>
        <MenuItem value="26-40">26-40</MenuItem>
        <MenuItem value="40+">40+</MenuItem>
      </Select>

      <Typography variant="body2" sx={{ mt: 2 }}>Genere:</Typography>
      <Select value={targetDetails.gender} onChange={(e) => handleTargetChange('gender', e.target.value)} fullWidth sx={{ mt: 2 }}>
        <MenuItem value="Maschile">Maschile</MenuItem>
        <MenuItem value="Femminile">Femminile</MenuItem>
        <MenuItem value="Non specificato">Non specificato</MenuItem>
      </Select>

      <Typography variant="body2" sx={{ mt: 2 }}>Livello di Istruzione:</Typography>
      <Select value={targetDetails.education} onChange={(e) => handleTargetChange('education', e.target.value)} fullWidth sx={{ mt: 2 }}>
        <MenuItem value="Primaria">Primaria</MenuItem>
        <MenuItem value="Secondaria">Secondaria</MenuItem>
        <MenuItem value="Universitaria">Universitaria</MenuItem>
        <MenuItem value="Post-laurea">Post-laurea</MenuItem>
      </Select>

      <Typography variant="body2" sx={{ mt: 2 }}>Occupazione:</Typography>
      <Select value={targetDetails.profession} onChange={(e) => handleTargetChange('profession', e.target.value)} fullWidth sx={{ mt: 2 }}>
        <MenuItem value="Studente">Studente</MenuItem>
        <MenuItem value="Impiegato">Impiegato</MenuItem>
        <MenuItem value="Manager">Manager</MenuItem>
        <MenuItem value="Freelancer">Freelancer</MenuItem>
        <MenuItem value="Imprenditore">Imprenditore</MenuItem>
        <MenuItem value="Altro">Altro</MenuItem>
      </Select>

      <Typography variant="body2" sx={{ mt: 2 }}>Fascia di Reddito:</Typography>
      <Select value={targetDetails.income} onChange={(e) => handleTargetChange('income', e.target.value)} fullWidth sx={{ mt: 2 }}>
        <MenuItem value="Basso (<20.000€/anno)">Basso (&lt;20.000€/anno)</MenuItem>
        <MenuItem value="Medio (20.000-50.000€/anno)">Medio (20.000-50.000€/anno)</MenuItem>
        <MenuItem value="Alto (>50.000€/anno)">Alto (&gt;50.000€/anno)</MenuItem>
      </Select>

      {/* Selezione Tipo di Ricerca */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">2. Seleziona il Tipo di Ricerca</Typography>
        <Select value={researchType} onChange={handleResearchTypeChange} fullWidth sx={{ mt: 2 }}>
          <MenuItem value="survey">Survey</MenuItem>
          <MenuItem value="focusGroup">Focus Group</MenuItem>
          <MenuItem value="directInteraction">Interazione Diretta</MenuItem>
        </Select>
      </Box>

      {/* Configurazione Test */}
      {researchType && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">3. Configura il Test</Typography>
          <Button onClick={handleOpenConfigDashboard} variant="contained" sx={{ mt: 2, backgroundColor: '#3f51b5', color: 'white' }}>
            Apri Dashboard di Configurazione
          </Button>
        </Box>
      )}

      {showTestConfigDashboard && <TestConfigurationDashboard onGenerateSurvey={handleSurveyGenerated} researchMode={researchType} />}

      {/* Bottone per Simulare la Survey */}
      {surveyQuestions.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Button variant="contained" disabled={loading} onClick={handleSimulateSurvey} sx={{ backgroundColor: loading ? '#ccc' : '#4caf50', color: 'white' }}>
            {loading ? "Generazione in corso..." : "Simula Survey"}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ConceptTestingPage;





















