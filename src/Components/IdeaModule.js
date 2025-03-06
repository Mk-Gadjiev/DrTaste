import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Select,
  MenuItem,
  TextField,
  Grid,
  FormControl,
  InputLabel,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Radar, Bar } from 'react-chartjs-2';
import ConceptualMap from './ConceptualMap'; // Utilizza il nuovo componente ConceptualMap

function IdeaModule() {
  const [ideaName, setIdeaName] = useState('');
  const [ideaDescription, setIdeaDescription] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [flavor, setFlavor] = useState('vaniglia');
  const [packaging, setPackaging] = useState('eco');
  const [targetConsumer, setTargetConsumer] = useState('giovani');
  const [insights, setInsights] = useState([]);
  const [sensorialData, setSensorialData] = useState({
    labels: ['Gusto', 'Texture', 'Aroma', 'Aspetto Visivo', 'Esperienza Complessiva'],
    datasets: [
      {
        label: 'Valutazione Sensoriale',
        data: [8, 7, 7.5, 8.5, 8],
        backgroundColor: 'rgba(34, 202, 236, 0.2)',
        borderColor: 'rgba(34, 202, 236, 1)',
        borderWidth: 1,
      },
    ],
  });

  const sensorialMetrics = [
    { label: 'Gusto', value: 8 },
    { label: 'Texture', value: 7 },
    { label: 'Aroma', value: 7.5 },
    { label: 'Aspetto Visivo', value: 8.5 },
    { label: 'Esperienza Complessiva', value: 8 },
  ];

  const neuromarketingData = {
    labels: ['Emozioni', 'Engagement', 'Memorabilità', 'Persuasione'],
    datasets: [
      {
        label: 'Neuromarketing Insights',
        data: [8, 7.5, 9, 8.5],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const ideaScoring = {
    labels: ['Innovazione', 'Attrattività', 'Fattibilità', 'Profitto', 'Sostenibilità'],
    datasets: [
      {
        label: 'Scoring Idea',
        data: [8, 9, 7, 8.5, 8],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Stati per il Need State Mapping Dinamico
  const [mappingOptions, setMappingOptions] = useState([]);
  const [selectedMappingOption, setSelectedMappingOption] = useState(null);
  const [mappingData, setMappingData] = useState(null);

  // La funzione fetchMappingOptions qui simula la chiamata alla tua API (che usa la tua chiave API).
  // Sostituisci questa funzione con la tua implementazione reale se necessario.
  const fetchMappingOptions = async (ideaDescription) => {
    // Esempio di dati fittizi che rispecchiano l'oggetto mappingData:
    return [
      {
        id: 1,
        xAxis: 'Funzionalità',
        xAxisOpposite: 'Esperienza Sensoriale',
        yAxis: 'Salute',
        yAxisOpposite: 'Indulgenza',
        suggestion: "La descrizione evidenzia una forte componente salutistica e una leggera componente indulgente.",
        competitorPositions: [
          { name: 'Brand A', x: 4, y: 7, r: 15, color: 'rgba(54, 162, 235, 0.7)' },
          { name: 'Brand B', x: 6, y: 4, r: 10, color: 'rgba(255, 159, 64, 0.7)' },
          { name: 'Brand C', x: 8, y: 7, r: 20, color: 'rgba(153, 102, 255, 0.7)' },
        ],
        whiteSpaces: [
          { x: 7, y: 2, r: 10, label: 'Opportunità di Innovazione' },
        ],
      },
      {
        id: 2,
        xAxis: 'Gusto Intenso',
        xAxisOpposite: 'Gusto Delicato',
        yAxis: 'Snack Veloce',
        yAxisOpposite: 'Esperienza Indulgente',
        suggestion: "Questo mapping si concentra sui momenti di consumo e sulle sensazioni gustative.",
        competitorPositions: [
          { name: 'Brand X', x: 2, y: 9, r: 12, color: 'rgba(75, 192, 192, 0.7)' },
          { name: 'Brand Y', x: 5, y: 5, r: 18, color: 'rgba(255, 99, 132, 0.7)' },
        ],
        whiteSpaces: [
          { x: 9, y: 3, r: 10, label: 'Spazio per Nuove Esperienze' },
        ],
      },
      {
        id: 3,
        xAxis: 'Sostenibilità',
        xAxisOpposite: 'Innovazione',
        yAxis: 'Tradizione',
        yAxisOpposite: 'Modernità',
        suggestion: "Mappa orientata ai valori e trend di mercato, utile per posizionamenti eco-friendly e moderni.",
        competitorPositions: [
          { name: 'Brand Eco', x: 4, y: 7, r: 15, color: 'rgba(0, 200, 83, 0.7)' },
          { name: 'Brand Modern', x: 8, y: 4, r: 10, color: 'rgba(0, 172, 193, 0.7)' },
        ],
        whiteSpaces: [
          { x: 6, y: 6, r: 10, label: 'Opportunità Misto Valore/Innovazione' },
        ],
      },
    ];
  };

  const handleSubmitIdea = async () => {
    setInsights([
      {
        title: 'Rilevanza del Prodotto',
        description: `Il concetto con il flavor ${flavor} attira consumatori interessati a prodotti innovativi e sostenibili.`,
        style: { backgroundColor: '#f1f8e9', padding: '10px', borderRadius: '8px' },
      },
      {
        title: 'Potenziale di Mercato',
        description: `Il packaging ${packaging} potrebbe incrementare le vendite nel mercato dei consumatori eco-consapevoli.`,
        style: { backgroundColor: '#e3f2fd', padding: '10px', borderRadius: '8px' },
      },
      {
        title: 'Suggerimenti Strategici',
        description: (
          <ul>
            <li>Promuovi il prodotto come ideale per <strong>{targetConsumer}</strong>.</li>
            <li>Considera l'aggiunta di <strong>varianti limitate</strong> per attirare attenzione.</li>
            <li>Potenzia la visibilità attraverso campagne digitali innovative.</li>
          </ul>
        ),
        style: { backgroundColor: '#fff8e1', padding: '10px', borderRadius: '8px' },
      },
    ]);
    setShowResults(true);

    // Richiama la funzione che ottiene le opzioni di mapping dalla tua API
    const options = await fetchMappingOptions(ideaDescription);
    setMappingOptions(options);
  };

  const handleMappingSelection = (optionId) => {
    const option = mappingOptions.find((opt) => opt.id === optionId);
    setSelectedMappingOption(optionId);
    setMappingData(option);
  };

  const handleNewIdea = () => {
    setIdeaName('');
    setIdeaDescription('');
    setShowResults(false);
    setFlavor('vaniglia');
    setPackaging('eco');
    setTargetConsumer('giovani');
    setMappingOptions([]);
    setSelectedMappingOption(null);
    setMappingData(null);
    setSensorialData({
      ...sensorialData,
      datasets: [{ ...sensorialData.datasets[0], data: [8, 7, 7.5, 8.5, 8] }],
    });
  };

  const handleUpdateInsights = () => {
    const updatedInsights = [
      {
        title: 'Rilevanza del Prodotto',
        description: `Il concetto con il flavor ${flavor} attira consumatori interessati a prodotti innovativi e sostenibili.`,
        style: { backgroundColor: '#f1f8e9', padding: '10px', borderRadius: '8px' },
      },
      {
        title: 'Potenziale di Mercato',
        description: `Il packaging ${packaging} potrebbe incrementare le vendite nel mercato dei consumatori eco-consapevoli.`,
        style: { backgroundColor: '#e3f2fd', padding: '10px', borderRadius: '8px' },
      },
      {
        title: 'Suggerimenti Strategici',
        description: (
          <ul>
            <li>Promuovi il prodotto come ideale per <strong>{targetConsumer}</strong>.</li>
            <li>Considera l'aggiunta di <strong>varianti limitate</strong> per attirare attenzione.</li>
            <li>Potenzia la visibilità attraverso campagne digitali innovative.</li>
          </ul>
        ),
        style: { backgroundColor: '#fff8e1', padding: '10px', borderRadius: '8px' },
      },
    ];
    setInsights(updatedInsights);

    const updatedSensorialData = [
      flavor === 'cioccolato' ? 9 : 8,
      7,
      7.5,
      packaging === 'eco' ? 8.5 : 8,
      8,
    ];
    setSensorialData({
      ...sensorialData,
      datasets: [{ ...sensorialData.datasets[0], data: updatedSensorialData }],
    });
  };

  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: 'auto', textAlign: 'center', overflowX: 'hidden' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Idea Module
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Carica o descrivi la tua idea di prodotto per ricevere feedback, suggerimenti e la mappa dinamica dei Need States.
      </Typography>

      {!showResults ? (
        <Box>
          <TextField
            fullWidth
            label="Nome dell'Idea"
            value={ideaName}
            onChange={(e) => setIdeaName(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Descrizione dell'Idea"
            value={ideaDescription}
            onChange={(e) => setIdeaDescription(e.target.value)}
            multiline
            rows={4}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            sx={{ mt: 2, backgroundColor: '#3f51b5', color: 'white' }}
            onClick={handleSubmitIdea}
          >
            Elabora Idea
          </Button>
        </Box>
      ) : (
        <>
          {/* Sezione Analisi */}
          <Box sx={{ mt: 4 }}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Valutazione Sensoriale del Concept</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Radar data={sensorialData} options={{ maintainAspectRatio: true }} />
                <Grid container spacing={2} sx={{ mt: 2 }}>
                  {sensorialMetrics.map((metric, index) => (
                    <Grid item xs={6} key={index}>
                      <Typography variant="body1">
                        <strong>{metric.label}:</strong> {metric.value}/10
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Insights Generati dall'AI</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {insights.map((insight, index) => (
                  <Box key={index} sx={{ ...insight.style, mb: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      {insight.title}
                    </Typography>
                    <Typography variant="body2">{insight.description}</Typography>
                  </Box>
                ))}
              </AccordionDetails>
            </Accordion>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Neuromarketing Insights</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Radar data={neuromarketingData} options={{ maintainAspectRatio: true }} />
              </AccordionDetails>
            </Accordion>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Scoring dell'Idea</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Bar data={ideaScoring} options={{ maintainAspectRatio: true }} />
              </AccordionDetails>
            </Accordion>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Modifica Concept</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Select fullWidth value={flavor} onChange={(e) => setFlavor(e.target.value)} sx={{ mb: 2 }}>
                  <MenuItem value="vaniglia">Vaniglia</MenuItem>
                  <MenuItem value="cioccolato">Cioccolato</MenuItem>
                  <MenuItem value="frutta">Frutta</MenuItem>
                </Select>
                <Select fullWidth value={packaging} onChange={(e) => setPackaging(e.target.value)} sx={{ mb: 2 }}>
                  <MenuItem value="eco">Eco-sostenibile</MenuItem>
                  <MenuItem value="monodose">Monodose</MenuItem>
                  <MenuItem value="familiare">Familiare</MenuItem>
                </Select>
                <Select fullWidth value={targetConsumer} onChange={(e) => setTargetConsumer(e.target.value)} sx={{ mb: 2 }}>
                  <MenuItem value="giovani">Giovani</MenuItem>
                  <MenuItem value="adulti">Adulti</MenuItem>
                  <MenuItem value="salutisti">Salutisti</MenuItem>
                </Select>
                <Button
                  variant="contained"
                  sx={{ mt: 2, backgroundColor: '#3f51b5', color: 'white' }}
                  onClick={handleUpdateInsights}
                >
                  Aggiorna Concept
                </Button>
              </AccordionDetails>
            </Accordion>
          </Box>

          {/* Sezione Need State Mapping Dinamico */}
          <Box sx={{ mt: 4, p: 2, border: '1px solid #ccc', borderRadius: '8px' }}>
            <Typography variant="h5" gutterBottom>
              Need State Mapping Dinamico
            </Typography>
            {mappingOptions.length > 0 ? (
              <>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="mapping-select-label">Seleziona Mappa</InputLabel>
                  <Select
                    labelId="mapping-select-label"
                    value={selectedMappingOption || ''}
                    label="Seleziona Mappa"
                    onChange={(e) => handleMappingSelection(e.target.value)}
                  >
                    {mappingOptions.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.xAxis} ↔ {option.xAxisOpposite} / {option.yAxis} ↔ {option.yAxisOpposite}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {selectedMappingOption && mappingData && (
                  <>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      <em>{mappingData.suggestion}</em>
                    </Typography>
                    <ConceptualMap mappingData={mappingData} />
                  </>
                )}
              </>
            ) : (
              <Typography variant="body1">
                La mappa verrà generata automaticamente dopo l'elaborazione dell'idea.
              </Typography>
            )}
          </Box>

          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#3f51b5', color: 'white' }}
              onClick={handleNewIdea}
            >
              Nuova Idea
            </Button>
            <Button variant="contained" sx={{ backgroundColor: '#3f51b5', color: 'white' }}>
              Aggiungi alla Dashboard
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}

export default IdeaModule;



