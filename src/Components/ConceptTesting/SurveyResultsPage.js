import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Paper, Divider } from '@mui/material';

const SurveyResultsPage = () => {
  const location = useLocation();
  const surveyResults = location.state?.surveyQuestions || [];

  console.log("📊 Risultati ricevuti nella pagina di Report:", surveyResults);

  if (!surveyResults || surveyResults.length === 0) {
    console.error("❌ Nessun risultato ricevuto!");
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h5">Nessun risultato disponibile.</Typography>
        <Typography variant="body1">
          Assicurati di aver completato la generazione della survey prima di visualizzare i risultati.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4, maxWidth: 900, mx: 'auto' }}>
      <Typography variant="h4" align="center" gutterBottom>
        📊 Report Dettagliato della Survey
      </Typography>

      {surveyResults.map((result, index) => (
        <Paper key={index} sx={{ p: 3, mb: 3, borderRadius: '8px', boxShadow: 3 }}>
          {/* Titolo della Domanda */}
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
            {index + 1}. {result?.question || "Domanda non disponibile"}
          </Typography>

          <Divider sx={{ mb: 2 }} />

          {/* Risposta Generata - Formattata */}
          <Typography variant="body1" sx={{ mt: 1, whiteSpace: 'pre-line', color: '#333' }}>
            <strong>📌 Risposta Generata:</strong>
            {formatResponse(result.response)}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

/**
 * Funzione per formattare la risposta ricevuta dall'API
 */
const formatResponse = (responseText) => {
  if (!responseText) return "Nessuna risposta disponibile.";

  let formattedText = responseText.replace(/###/g, "").trim();

  // Rimuove il titolo della domanda per evitare ripetizioni
  formattedText = formattedText.replace(/Titolo della Domanda: .+\n?/g, "");

  // Migliora la formattazione della Sintesi Chiave
  formattedText = formattedText.replace(/Sintesi Chiave:/g, "<strong>Sintesi Chiave:</strong>");

  // Trasforma i dati quantitativi in una tabella HTML
  formattedText = formattedText.replace(/\|\s*Risposta\s*\|\s*Percentuale\s*\|/, 
    '<table border="1" style="width:100%; border-collapse: collapse; margin-top: 10px;"><tr><th>Risposta</th><th>Percentuale</th></tr>');
  formattedText = formattedText.replace(/\|([^|]+)\|([^|]+)\|/g, '<tr><td>$1</td><td>$2</td></tr>');
  formattedText = formattedText.replace(/\n\|/g, '</table>\n');

  // Formatta le citazioni
  formattedText = formattedText.replace(/- "(.+?)"/g, 
    '<blockquote style="font-style: italic; color: #555; margin-left: 10px;">"$1"</blockquote>');

  return <div dangerouslySetInnerHTML={{ __html: formattedText }} />;
};

export default SurveyResultsPage;




























































