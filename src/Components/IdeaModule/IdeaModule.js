import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Button,
  CircularProgress,
  Card,
  CardContent,
  Divider,
  Grid,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Bar, Radar } from 'react-chartjs-2';
import IdeaInput from './IdeaInput';
import ModifyConcept from './ModifyConcept';
import ConceptualMap from './ConceptualMap';
import IdeaDashboard from './IdeaDashboard';
import SideMenu from './SideMenu';
import NeuromarketingInsights from './NeuromarketingInsights';

// Funzione per generare il grafico per le sezioni "sensorial", "neuromarketing" e "aiInsights"
const renderChart = (type) => {
  const chartData = {
    sensorial: {
      labels: ['Gusto', 'Texture', 'Aroma', 'Aspetto Visivo', 'Esperienza'],
      datasets: [
        {
          label: 'Valutazione',
          data: [8, 7, 6.5, 9, 8.5],
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
        },
      ],
    },
    neuromarketing: {
      labels: ['Curiosità', 'Nostalgia', 'Sorpresa', 'Fiducia', 'Raffinatezza'],
      datasets: [
        {
          label: 'Reazioni Emotive',
          data: [8, 7.5, 6, 7, 9],
          backgroundColor: 'rgba(255, 159, 64, 0.5)',
        },
      ],
    },
    aiInsights: {
      labels: ['Mercato', 'Posizionamento', 'Innovazione', 'Engagement', 'Fattibilità'],
      datasets: [
        {
          label: 'Insight AI',
          data: [7, 8, 9, 7.5, 6.5],
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
        },
      ],
    },
  };
  const data = chartData[type];
  if (!data) return null;
  return type === 'sensorial' ? <Radar data={data} /> : <Bar data={data} />;
};

// Funzione per generare il report (usato per sensorial e aiInsights)
const renderReport = (title, content, loadingStatus, chartType) => (
  <Card sx={{ mb: 3, p: 3, backgroundColor: '#f8f9fa' }}>
    <CardContent>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
        {title}
      </Typography>
      <Divider sx={{ mb: 2 }} />
      {loadingStatus ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            {content.split('\n').map((line, index) => (
              <Typography key={index} variant="body1" sx={{ mb: 1 }}>
                {line}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} md={6}>
            {renderChart(chartType)}
          </Grid>
        </Grid>
      )}
    </CardContent>
  </Card>
);

// Funzione per generare il pulsante d'analisi per ogni sezione
const renderAnalysisButton = (type, label, triggerAnalysis, loading) => (
  <Button
    variant="contained"
    onClick={() => triggerAnalysis(type)}
    disabled={loading[type]}
    sx={{ mb: 2, width: '100%' }}
  >
    {loading[type] ? <CircularProgress size={24} /> : label}
  </Button>
);

function IdeaModule() {
  const [ideaName, setIdeaName] = useState('');
  const [ideaDescription, setIdeaDescription] = useState('');
  const [showResults, setShowResults] = useState(false);
  // Sezioni possibili: "Carica Idea", "Idea Dashboard", "Valutazione Sensoriale", "Insights Generati dall'AI", "Neuromarketing Insights", "Conceptual Map", "Modifica Concept", "Locked"
  const [selectedSection, setSelectedSection] = useState('Carica Idea');
  const [menuOpen, setMenuOpen] = useState(false);
  const [insights, setInsights] = useState({
    sensorial: '',
    aiInsights: '',
    neuromarketing: null,
    conceptualMap: null,
  });
  const [loading, setLoading] = useState({
    sensorial: false,
    aiInsights: false,
    neuromarketing: false,
    conceptualMap: false,
  });

  // Dummy dati per le altre sezioni
  const dummySensorialData =
    "Il prodotto presenta un gusto equilibrato, una texture morbida e un aroma persistente. È percepito come molto appetitoso e adatto ad un consumo quotidiano.";
  const dummyAIInsights =
    "Il mercato mostra un trend positivo per prodotti innovativi. Il posizionamento suggerito è rivolto a consumatori attenti alla salute, con strategie di branding moderne e sostenibili.";
  
  // Dummy dati per Neuromarketing, strutturati come oggetto
  const dummyNeuromarketingData = {
    eyeTracking: {
      description: "L'analisi eye tracking rivela che il 72% dell'attenzione è concentrato sulla parte superiore del packaging, suggerendo un forte interesse visivo.",
      heatmapUrl: "https://via.placeholder.com/600x300.png?text=Loacker+Packaging" 
    },
    facialExpressions: {
      description: "Il riconoscimento facciale mostra che il 45% dei soggetti esprime felicità, il 30% sorpresa, il 15% reticenza e il 10% neutralità.",
      chartUrl: "https://via.placeholder.com/300x300.png?text=Facial+Expression+Chart"
    },
    EEG: {
      description: "I dati EEG simulati indicano un picco di attività nella regione prefrontale durante l'esposizione, segnalando un alto coinvolgimento emotivo.",
      chartUrl: "https://via.placeholder.com/600x200.png?text=EEG+Activity+Chart"
    },
    socialSentiment: {
      description: "L'analisi del sentiment dai social media evidenzia un sentimento estremamente positivo, con le parole chiave 'innovazione' e 'qualità' molto ricorrenti.",
      wordCloudUrl: "https://via.placeholder.com/600x300.png?text=Social+Media+Sentiment+Cloud"
    },
    overall: "Il prodotto suscita emozioni di fiducia e curiosità e offre un forte impatto visivo, suggerendo che un'ottimizzazione del design potrebbe ulteriormente amplificare il coinvolgimento emotivo."
  };

  const dummyMappingData = {
    xAxis: 'Funzionalità',
    xAxisOpposite: 'Esperienza Sensoriale',
    yAxis: 'Salute',
    yAxisOpposite: 'Indulgenza',
    competitorPositions: [
      { name: 'Brand A', x: 4, y: 7, r: 15, color: 'rgba(54, 162, 235, 0.7)', borderColor: 'rgba(54, 162, 235, 1)' },
      { name: 'Brand B', x: 6, y: 4, r: 10, color: 'rgba(255, 159, 64, 0.7)', borderColor: 'rgba(255, 159, 64, 1)' },
    ],
    whiteSpaces: [{ label: 'Opportunità di Innovazione', x: 7, y: 2, r: 10 }],
    needStates: {
      quadrante1: 'Comfort quotidiano',
      quadrante2: 'Energia immediata',
      quadrante3: 'Tradizione e Sicurezza',
      quadrante4: 'Innovazione e Indulgenza',
    },
    suggestion: 'Sfrutta il white space nel quadrante 4 per posizionare un prodotto innovativo.',
  };

  // Funzione che simula la chiamata API con dummy data
  const triggerAnalysis = async (type) => {
    setLoading((prev) => ({ ...prev, [type]: true }));
    setTimeout(() => {
      if (type === 'sensorial') {
        setInsights((prev) => ({ ...prev, sensorial: dummySensorialData }));
      } else if (type === 'aiInsights') {
        setInsights((prev) => ({ ...prev, aiInsights: dummyAIInsights }));
      } else if (type === 'neuromarketing') {
        setInsights((prev) => ({ ...prev, neuromarketing: dummyNeuromarketingData }));
      } else if (type === 'conceptualMap') {
        setInsights((prev) => ({ ...prev, conceptualMap: dummyMappingData }));
      }
      setLoading((prev) => ({ ...prev, [type]: false }));
    }, 1000);
  };

  // Quando l'idea viene salvata, non cambiamo automaticamente la sezione
  const handleIdeaSubmit = () => {
    setShowResults(true);
  };

  // Funzione per gestire il cambio di sezione; se l'idea non è salvata e si tenta di accedere a una sezione diversa da "Carica Idea", imposta "Locked"
  const handleSectionSelect = (section) => {
    if (!showResults && section !== 'Carica Idea') {
      setSelectedSection('Locked');
    } else {
      setSelectedSection(section);
    }
  };

  // Renderizza un messaggio per le sezioni bloccate
  const renderLockedSection = () => (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h6" color="warning.main" sx={{ mb: 2 }}>
        Salva l'idea per accedere a questa sezione.
      </Typography>
      <Button variant="contained" onClick={() => setSelectedSection('Carica Idea')}>
        Torna a Carica Idea
      </Button>
    </Box>
  );

  const renderSection = () => {
    if (!showResults) {
      return (
        <IdeaInput
          ideaName={ideaName}
          ideaDescription={ideaDescription}
          setIdeaName={setIdeaName}
          setIdeaDescription={setIdeaDescription}
          onSubmit={handleIdeaSubmit}
        />
      );
    }
    if (selectedSection === 'Locked') {
      return renderLockedSection();
    }
    if (selectedSection === 'Idea Dashboard') {
      return (
        <IdeaDashboard
          ideaName={ideaName}
          ideaDescription={ideaDescription}
          insights={insights}
          onDeepDive={handleSectionSelect}
        />
      );
    }
    if (selectedSection === 'Carica Idea') {
      return (
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Analizza la tua Idea
          </Typography>
          {renderAnalysisButton('sensorial', 'Avvia Valutazione Sensoriale', triggerAnalysis, loading)}
          {renderAnalysisButton('aiInsights', 'Genera Insight con AI', triggerAnalysis, loading)}
          {renderAnalysisButton('neuromarketing', 'Avvia Neuromarketing Insights', triggerAnalysis, loading)}
          {renderAnalysisButton('conceptualMap', 'Avvia Analisi - Mappa Concettuale', triggerAnalysis, loading)}
          <Box sx={{ mt: 2 }}>
            <Button
              variant="outlined"
              onClick={() => {
                setInsights((prev) => ({ ...prev, sensorial: dummySensorialData }));
                console.log("Impostati dati fittizi per sensorial:", dummySensorialData);
              }}
              sx={{ mr: 1 }}
            >
              Dummy Sensorial
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                setInsights((prev) => ({ ...prev, aiInsights: dummyAIInsights }));
                console.log("Impostati dati fittizi per AI Insights:", dummyAIInsights);
              }}
              sx={{ mr: 1 }}
            >
              Dummy AI Insights
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                setInsights((prev) => ({ ...prev, neuromarketing: dummyNeuromarketingData }));
                setSelectedSection('Neuromarketing Insights');
                console.log("Impostati dati fittizi per Neuromarketing:", dummyNeuromarketingData);
              }}
              sx={{ mr: 1 }}
            >
              Dummy Neuromarketing
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                setInsights((prev) => ({ ...prev, conceptualMap: dummyMappingData }));
                setSelectedSection('Conceptual Map');
                console.log("Impostati dati fittizi per Conceptual Map:", dummyMappingData);
              }}
            >
              Dummy Conceptual Map
            </Button>
          </Box>
        </Box>
      );
    }
    switch (selectedSection) {
      case 'Valutazione Sensoriale':
        return renderReport("Valutazione Sensoriale", insights.sensorial, loading.sensorial, 'sensorial');
      case "Insights Generati dall'AI":
        return renderReport("Insights di Mercato", insights.aiInsights, loading.aiInsights, 'aiInsights');
      case 'Neuromarketing Insights':
        return (
          <NeuromarketingInsights
            data={insights.neuromarketing}
            onSimulate={() => triggerAnalysis('neuromarketing')}
          />
        );
      case 'Conceptual Map':
        return (
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
              Mappa Concettuale
            </Typography>
            {loading.conceptualMap ? (
              <CircularProgress />
            ) : insights.conceptualMap ? (
              <ConceptualMap mappingData={insights.conceptualMap} />
            ) : (
              <Typography>Nessun dato disponibile. Avvia l'analisi della Mappa Concettuale.</Typography>
            )}
          </Box>
        );
      case 'Modifica Concept':
        return <ModifyConcept />;
      default:
        return <Typography>Seleziona una sezione dal menu.</Typography>;
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <SideMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onSectionSelect={handleSectionSelect}
        selectedSection={selectedSection}
        showResults={showResults}
      />
      <Box sx={{ flexGrow: 1, p: 4, backgroundColor: 'background.default' }}>
        <IconButton onClick={() => setMenuOpen(true)} sx={{ mb: 2, color: 'primary.main' }}>
          <MenuIcon />
        </IconButton>
        {renderSection()}
      </Box>
    </Box>
  );
}

export default IdeaModule;



































































