import React, { useState } from 'react';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import CompetitorList from './CompetitorList';
import Charts from './Charts';
import InsightsSection from './InsightsSection';

function MarketComparison() {
  const [activeTab, setActiveTab] = useState(0);

  // Dati per i grafici
  const radarData = {
    labels: ['Prezzo', 'Qualità', 'Innovazione', 'Visibilità a Scaffale', 'Sostenibilità'],
    datasets: [
      {
        label: 'Idea Corrente',
        data: [75, 85, 90, 80, 70],
        backgroundColor: 'rgba(34, 202, 236, 0.5)',
        borderColor: 'rgba(34, 202, 236, 1)',
        borderWidth: 1,
      },
      {
        label: 'Ferrero',
        data: [80, 90, 85, 95, 80],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: ['Prezzo', 'Qualità', 'Innovazione', 'Apprezzamento sui Social', 'Sostenibilità'],
    datasets: [
      {
        label: 'Idea Corrente',
        data: [75, 85, 90, 78, 70],
        backgroundColor: 'rgba(34, 202, 236, 0.8)',
      },
      {
        label: 'Media di Mercato',
        data: [72, 78, 85, 74, 74],
        backgroundColor: 'rgba(153, 102, 255, 0.8)',
      },
    ],
  };

  // Dati Competitor
  const competitors = [
    {
      name: 'Ferrero Rocher',
      brand: 'Ferrero Rocher',
      company: 'Ferrero SpA',
      image: 'https://via.placeholder.com/150',
      description: 'Eccellenza nella qualità e innovazione, ideale per un target premium.',
      price: 5.49,
      weight: '200g',
      weightValue: 200,
      shelf: 'Cioccolato e Snack Dolci',
      flavour: 'Nocciola',
      frontClaims: '100% Naturale, Senza Conservanti, Fonte di Proteine',
      backClaims: 'Con ingredienti da agricoltura sostenibile, Senza glutine',
      needState: 'Premium Indulgence',
      consumptionMoment: 'Regalo',
      usp: 'Packaging elegante, Perfetto per regali',
      target: 'Adulti',
      sustainablePackaging: 'Confezione riciclabile al 90%',
      socialComments: [
        'Ottimo prodotto, ma un po’ caro.',
        'Adoro il sapore autentico di nocciola.',
        'Packaging elegante e perfetto per regali.',
      ],
    },
    {
      name: 'Milka',
      brand: 'Milka',
      company: 'Mondelez International',
      image: 'https://via.placeholder.com/150',
      description: 'Alternativa economica con un buon equilibrio qualità-prezzo.',
      price: 3.79,
      weight: '100g',
      weightValue: 100,
      shelf: 'Cioccolato e Snack Dolci',
      flavour: 'Cioccolato al Latte',
      frontClaims: 'Latte Alpino, Ideale per famiglie, Senza olio di palma',
      backClaims: 'Conservanti ridotti, Imballaggio riciclabile',
      needState: 'Affordable Indulgence',
      consumptionMoment: 'Merenda',
      usp: 'Latte Alpino, Prezzo competitivo',
      target: 'Famiglie',
      sustainablePackaging: 'Imballaggio 80% riciclabile',
      socialComments: [
        'Il gusto è davvero unico.',
        'Ottimo rapporto qualità-prezzo.',
        'Perfetto per spuntini veloci con la famiglia.',
      ],
    },
    {
      name: 'Loacker',
      brand: 'Loacker',
      company: 'Loacker',
      image: 'https://via.placeholder.com/150',
      description: 'Prodotti naturali e leggeri, apprezzati da consumatori attenti alla salute.',
      price: 4.99,
      weight: '125g',
      weightValue: 125,
      shelf: 'Biscotti e Wafer',
      flavour: 'Vaniglia',
      frontClaims: 'Senza glutine, Con ingredienti naturali',
      backClaims: '100% Latte Alpino, Nessun grasso idrogenato',
      needState: 'Health-Conscious Indulgence',
      consumptionMoment: 'Colazione',
      usp: 'Senza glutine, Ingredienti naturali',
      target: 'Consumatori attenti alla salute',
      sustainablePackaging: 'Materiale riciclabile al 95%',
      socialComments: [
        'Leggero e croccante, il migliore nel suo genere.',
        'Perfetto per chi cerca qualcosa di naturale.',
        'Molto buono, ma la confezione potrebbe essere più grande.',
      ],
    },
  ];

  // Insights, Tendenze e Benchmark
  const recommendations = [
    { title: 'Prezzo Competitivo', description: 'Ridurre il prezzo a €4,50 potrebbe aumentare l’appetibilità del prodotto.' },
    { title: 'Innovazione', description: 'Aggiungi una caratteristica unica, come "ingredienti biologici".' },
  ];

  const benchmarks = [
    { title: 'Prezzo', description: 'Il prezzo è superiore alla media di mercato.', marketAverage: '€3.50', currentPosition: '€5.49' },
    { title: 'Social Media', description: 'Meno commenti positivi rispetto ai competitor.', marketAverage: '85%', currentPosition: '70%' },
  ];

  const trends = [
    { title: 'Sostenibilità', description: 'Crescita del 20% per prodotti con packaging riciclato.' },
    { title: 'Snack Healthy', description: 'Maggiore interesse per snack a basso contenuto di zuccheri.' },
  ];

  return (
    <Box sx={{ p: 4, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h4" align="center" gutterBottom>Market Comparison</Typography>
      <Tabs
        value={activeTab}
        onChange={(e, newValue) => setActiveTab(newValue)}
        centered
        sx={{ mb: 4 }}
      >
        <Tab label="Grafici" />
        <Tab label="Competitor" />
        <Tab label="Insights" />
      </Tabs>

      {activeTab === 0 && <Charts radarData={radarData} barData={barData} />}
      {activeTab === 1 && <CompetitorList competitors={competitors} />}
      {activeTab === 2 && <InsightsSection insights={[]} recommendations={recommendations} benchmarks={benchmarks} trends={trends} />}
    </Box>
  );
}

export default MarketComparison;










