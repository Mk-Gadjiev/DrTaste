// Opportunities.js
import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem, Tabs, Tab } from '@mui/material';
import Sidebar from './Sidebar';
import SensoryInsights from './SensoryInsights';
import MarketTrends from './MarketTrends';
import NewProducts from './NewProducts';
import InterestingIngredients from './InterestingIngredients';
import NeedStatesFlavours from './NeedStatesFlavours';
import DigitalTwinSimulation from './DigitalTwinSimulation';
import ConceptGeneratorSection from './ConceptGeneratorSection';

function Opportunities() {
  const [selectedProject, setSelectedProject] = useState('');
  const [tabIndex, setTabIndex] = useState(0);

  // Dati dummy
  const dummySensoryData = {
    labels: ['Dolce', 'Acido', 'Amaro', 'Salato', 'Umami'],
    datasets: [
      { label: 'Profilo Sensoriale', data: [70, 60, 50, 80, 65], backgroundColor: 'rgba(75, 192, 192, 0.5)' },
    ],
  };

  const dummyEmotionData = {
    labels: ['Felice', 'Sorpreso', 'Calmo', 'Energico'],
    datasets: [
      { label: 'Emozioni', data: [30, 25, 35, 40], backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'] },
    ],
  };

  const dummyDemographicData = {
    labels: ['Giovani', 'Adulti', 'Anziani'],
    datasets: [
      { label: 'Segmentazione', data: [50, 30, 20], backgroundColor: ['#8e44ad', '#2980b9', '#27ae60'] },
    ],
  };

  const dummyTrendData = {
    labels: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag'],
    datasets: [
      { label: 'Trend di Mercato', data: [10, 20, 15, 25, 30], borderColor: 'rgba(153, 102, 255, 1)', backgroundColor: 'rgba(153, 102, 255, 0.2)' },
    ],
  };

  const dummyMarketOpportunities = {
    labels: ['Opportunità 1', 'Opportunità 2', 'Opportunità 3'],
    datasets: [
      { label: 'Opportunità di Mercato', data: [40, 60, 20], backgroundColor: ['#4caf50', '#ffc107', '#f44336'] },
    ],
  };

  const dummyMicroTrends = [
    { trend: 'Cibo sostenibile', description: 'Crescente interesse per prodotti ecologici.' },
    { trend: 'Snacks salutari', description: 'Domanda in aumento per opzioni salutari.' },
    { trend: 'Fusion Food', description: 'Combinazioni innovative di cucine.' },
  ];

  const dummyInnovativeProducts = [
    { name: 'Prodotto 1', description: 'Innovazione nel gusto' },
    { name: 'Prodotto 2', description: 'Nuova esperienza sensoriale' },
    { name: 'Prodotto 3', description: "Design all'avanguardia" },
  ];

  const dummyStartups = [
    { name: 'Startup A', location: 'Milano', focus: 'Snack' },
    { name: 'Startup B', location: 'Torino', focus: 'Bevande' },
    { name: 'Startup C', location: 'Roma', focus: 'Ingredienti naturali' },
  ];

  const dummyProductComparison = {
    headers: ['Prodotto', 'Prezzo', 'Innovazione'],
    rows: [
      ['Prodotto 1', '€10', 'Alta'],
      ['Prodotto 2', '€12', 'Media'],
      ['Prodotto 3', '€8', 'Bassa'],
    ],
  };

  const dummyTopIngredients = {
    labels: ['Zenzero', 'Curcuma', 'Miele'],
    datasets: [
      { label: 'Frequenza', data: [80, 65, 70], backgroundColor: 'rgba(255, 159, 64, 0.5)' },
    ],
  };

  const dummyPairingData = {
    nodes: [
      { id: 'Ingredient A' },
      { id: 'Ingredient B' },
      { id: 'Ingredient C' },
    ],
    links: [
      { source: 'Ingredient A', target: 'Ingredient B' },
      { source: 'Ingredient B', target: 'Ingredient C' },
    ],
  };

  const dummyNeuroImpact = {
    labels: ['Coinvolgimento', 'Emozione'],
    datasets: [
      { label: 'Impatto Neuro', data: [75, 85], backgroundColor: ['#9b59b6', '#e74c3c'] },
    ],
  };

  const dummyNeedStates = {
    labels: ['Energia', 'Relax', 'Socializzazione'],
    datasets: [
      { label: 'Need States', data: [50, 30, 20], backgroundColor: ['#3498db', '#1abc9c', '#f1c40f'] },
    ],
  };

  const dummyFlavorPreferences = {
    labels: ['Dolce', 'Salato', 'Piccante'],
    datasets: [
      { label: 'Sapori Preferiti', data: [60, 25, 15], backgroundColor: ['#e67e22', '#16a085', '#2980b9'] },
    ],
  };

  const dummyNeuroFlavors = {
    labels: ['Soddisfazione', 'Eccitazione'],
    datasets: [
      { label: 'Impatto Neuro sui Sapori', data: [70, 80], backgroundColor: ['#2ecc71', '#f39c12'] },
    ],
  };

  const dummyDemographicPreferences = {
    labels: ['Femminile', 'Maschile', 'Altro'],
    datasets: [
      { label: 'Preferenze Demografiche', data: [40, 50, 10], backgroundColor: ['#e74c3c', '#3498db', '#95a5a6'] },
    ],
  };

  const dummyConsumerPreferences = [
    { preference: 'Gusto dolce', detail: 'Il 60% dei consumatori preferisce prodotti con gusto dolce.' },
    { preference: 'Packaging innovativo', detail: 'Il 45% ritiene importante il design della confezione.' },
    { preference: 'Sostenibilità', detail: 'Il 70% dei consumatori preferisce prodotti eco-friendly.' },
  ];

  const dummyConceptData = {
    title: 'Nuovo Concept Innovativo',
    description: 'Un prodotto che unisce tradizione e innovazione.',
    ingredients: ['Ingrediente 1', 'Ingrediente 2'],
    positioning: 'Premium e salutare',
  };

  const handleProjectChange = (event) => {
    setSelectedProject(event.target.value);
  };

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box display="flex">
      <Sidebar />
      <Box flex={1}>
        {/* Header con filtro progetto */}
        <Box sx={{ p: 2, borderBottom: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h4">Opportunities</Typography>
          <Select value={selectedProject} onChange={handleProjectChange} displayEmpty>
            <MenuItem value=""><em>Modalità Esplorativa</em></MenuItem>
            <MenuItem value="ProjectA">Project A</MenuItem>
            <MenuItem value="ProjectB">Project B</MenuItem>
            <MenuItem value="ProjectC">Project C</MenuItem>
          </Select>
        </Box>
        {/* Tabs per suddividere le sezioni */}
        <Tabs value={tabIndex} onChange={handleTabChange} variant="scrollable" scrollButtons="auto">
          <Tab label="Sensory Insights" />
          <Tab label="Market Trends" />
          <Tab label="New Products & Startup" />
          <Tab label="Ingredients" />
          <Tab label="Need States & Flavours" />
          <Tab label="Digital Twin" />
          <Tab label="Concept Generation" />
        </Tabs>
        {/* Contenuto per ciascun Tab */}
        <Box sx={{ p: 3 }}>
          {tabIndex === 0 && (
            <SensoryInsights
              sensorialData={dummySensoryData}
              emotionData={dummyEmotionData}
              demographicData={dummyDemographicData}
              consumerPreferences={dummyConsumerPreferences}
            />
          )}
          {tabIndex === 1 && (
            <MarketTrends
              trendData={dummyTrendData}
              marketOpportunities={dummyMarketOpportunities}
              microTrends={dummyMicroTrends}
            />
          )}
          {tabIndex === 2 && (
            <NewProducts
              innovativeProducts={dummyInnovativeProducts}
              startups={dummyStartups}
              productComparison={dummyProductComparison}
            />
          )}
          {tabIndex === 3 && (
            <InterestingIngredients
              topIngredients={dummyTopIngredients}
              pairingData={dummyPairingData}
              neuroImpact={dummyNeuroImpact}
            />
          )}
          {tabIndex === 4 && (
            <NeedStatesFlavours
              needStates={dummyNeedStates}
              flavorPreferences={dummyFlavorPreferences}
              neuroFlavors={dummyNeuroFlavors}
            />
          )}
          {tabIndex === 5 && (
            <DigitalTwinSimulation
              demographicPreferences={dummyDemographicPreferences}
              emotionData={dummyEmotionData}
              recommendations={dummyConsumerPreferences} // Puoi usare dummyConsumerPreferences come placeholder
            />
          )}
          {tabIndex === 6 && (
            <ConceptGeneratorSection
              selectedTrend={dummyMicroTrends[0]}
              conceptData={dummyConceptData}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Opportunities;




