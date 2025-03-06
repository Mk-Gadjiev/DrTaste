// src/Pages/Analytics.js
import React, { useState } from 'react';
import { Typography, Box, Select, MenuItem, Button } from '@mui/material';
import ConsumerPreferences from '../Components/Insights/ConsumerPreferences';
import NeuromarketingInsight from '../Components/Insights/NeuromarketingInsight';
import PreferenceTrends from '../Components/Insights/PreferenceTrends';
import InnovationSuggestions from '../Components/Insights/InnovationSuggestions';
import SocialMediaSentiment from '../Components/Insights/SocialMediaSentiment';
import InsightCombination from '../Components/Insights/InsightCombination';

function Analytics() {
  const [selectedProduct, setSelectedProduct] = useState('Mela');
  const [apiResponse, setApiResponse] = useState(null); // Stato per la simulazione API

  const dataOptions = {
    Mela: {
      neuromarketingData: [80, 70, 75, 60, 85],
      consumerPreferencesData: [45, 35, 10, 5, 5],
      preferenceTrendsData: {
        labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio'],
        datasets: [
          {
            label: 'Trend delle Preferenze per Mela',
            data: [20, 25, 30, 22, 27],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
          },
        ],
      },
      socialMediaSentimentData: {
        labels: ['Positivo', 'Neutro', 'Negativo'],
        datasets: [
          {
            label: 'Sentiment sui Social per Mela',
            data: [60, 25, 15],
            backgroundColor: ['#4caf50', '#ffc107', '#f44336'],
          },
        ],
      },
      insightCombinationData: {
        labels: ['Attenzione', 'Coinvolgimento', 'Emozione'],
        datasets: [
          {
            label: 'Combinazione di Insight per Mela',
            data: [70, 80, 65],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
          },
        ],
      },
      innovationSuggestions: [
        'Sviluppare una nuova varietà di mela',
        'Offrire opzioni di mela biologica',
        'Aumentare il marketing per la mela rossa',
      ],
    },
    Wafer: {
      neuromarketingData: [60, 65, 70, 75, 80],
      consumerPreferencesData: [30, 25, 20, 15, 10],
      preferenceTrendsData: {
        labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio'],
        datasets: [
          {
            label: 'Trend delle Preferenze per Wafer',
            data: [15, 18, 22, 28, 30],
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
          },
        ],
      },
      socialMediaSentimentData: {
        labels: ['Positivo', 'Neutro', 'Negativo'],
        datasets: [
          {
            label: 'Sentiment sui Social per Wafer',
            data: [55, 30, 15],
            backgroundColor: ['#4caf50', '#ffc107', '#f44336'],
          },
        ],
      },
      insightCombinationData: {
        labels: ['Attenzione', 'Coinvolgimento', 'Emozione'],
        datasets: [
          {
            label: 'Combinazione di Insight per Wafer',
            data: [65, 75, 70],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
          },
        ],
      },
      innovationSuggestions: [
        'Migliorare la ricetta del wafer',
        'Offrire wafer senza glutine',
        'Espandere la gamma di gusti',
      ],
    },
  };

  const handleChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  const handleApiCall = () => {
    setTimeout(() => {
      setApiResponse([
        'Startup 1: Innovazione negli snack alla mela',
        'Startup 2: Bevande fermentate a base di mela',
        'Startup 3: Nuovi modi di coltivazione per mele biologiche',
      ]);
    }, 1000); // Simula un ritardo di 1 secondo
  };

  return (
    <Box className="analytics-page-container" sx={{ p: 3 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Analytics
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        Insight su Neuromarketing e Preferenze per {selectedProduct}
      </Typography>
      <Box display="flex" justifyContent="center" mb={4}>
        <Select value={selectedProduct} onChange={handleChange} displayEmpty>
          <MenuItem value="Mela">Mela</MenuItem>
          <MenuItem value="Wafer">Wafer</MenuItem>
        </Select>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" gap={4}>
        {/* Prima riga di componenti */}
        <Box display="flex" justifyContent="center" flexWrap="wrap" gap={4}>
          <NeuromarketingInsight
            data={{
              labels: ['Attenzione', 'Piacere', 'Coinvolgimento', 'Memoria', 'Emozione'],
              datasets: [
                {
                  label: selectedProduct,
                  data: dataOptions[selectedProduct].neuromarketingData,
                  backgroundColor: 'rgba(75, 192, 192, 0.5)',
                },
              ],
            }}
          />
          <ConsumerPreferences
            data={{
              labels: ['Piacevole', 'Accettabile', 'Neutro', 'Indifferente', 'Non Piace'],
              datasets: [
                {
                  label: selectedProduct,
                  data: dataOptions[selectedProduct].consumerPreferencesData,
                  backgroundColor: ['#4caf50', '#8bc34a', '#cddc39', '#ffc107', '#f44336'],
                },
              ],
            }}
          />
        </Box>
        {/* Seconda riga di componenti */}
        <Box display="flex" justifyContent="center" flexWrap="wrap" gap={4}>
          <PreferenceTrends data={dataOptions[selectedProduct].preferenceTrendsData} />
          <SocialMediaSentiment data={dataOptions[selectedProduct].socialMediaSentimentData} />
        </Box>
        {/* Terza riga di componenti */}
        <Box display="flex" justifyContent="center" flexWrap="wrap" gap={4}>
          <InsightCombination data={dataOptions[selectedProduct].insightCombinationData} />
          <InnovationSuggestions suggestions={dataOptions[selectedProduct].innovationSuggestions} />
        </Box>
        {/* Bottone per la simulazione API */}
        <Box display="flex" justifyContent="center" mt={4}>
          <Button variant="contained" color="primary" onClick={handleApiCall}>
            Scouting Startup
          </Button>
        </Box>
        {apiResponse && (
          <Box mt={2}>
            <Typography variant="h6" align="center">
              Risultati Scouting Startup:
            </Typography>
            <ul>
              {apiResponse.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Analytics;

















