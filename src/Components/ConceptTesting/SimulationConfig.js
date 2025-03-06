import React, { useState } from 'react';
import { Box, Select, MenuItem, Typography, TextField, Button } from '@mui/material';

const SimulationConfig = ({ onSurveyUpdate }) => {
  const [simulationMode, setSimulationMode] = useState('survey');
  const [newQuestion, setNewQuestion] = useState('');
  const [surveyQuestions, setSurveyQuestions] = useState([
    'Quanto trovi interessante il prodotto?',
    'Quanto ti piace il design?',
  ]);

  const handleAddQuestion = () => {
    if (newQuestion.trim()) {
      const updatedQuestions = [...surveyQuestions, newQuestion];
      setSurveyQuestions(updatedQuestions);
      setNewQuestion('');
      onSurveyUpdate(updatedQuestions);
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6">Configura la Simulazione</Typography>
      <Select
        value={simulationMode}
        onChange={(e) => setSimulationMode(e.target.value)}
        fullWidth
        sx={{ mt: 2 }}
      >
        <MenuItem value="survey">Survey</MenuItem>
        <MenuItem value="focusGroup">Focus Group</MenuItem>
        <MenuItem value="manualQuestions">Domande Manuali</MenuItem>
      </Select>

      {simulationMode === 'survey' && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Domande della Survey</Typography>
          {surveyQuestions.map((question, index) => (
            <Typography key={index} sx={{ mt: 1 }}>
              {index + 1}. {question}
            </Typography>
          ))}
          <TextField
            label="Aggiungi una domanda"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            fullWidth
            sx={{ mt: 2 }}
          />
          <Button
            onClick={handleAddQuestion}
            variant="contained"
            sx={{ mt: 2, backgroundColor: '#3f51b5', color: 'white' }}
          >
            Aggiungi
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default SimulationConfig;
