import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Card,
  CardContent,
} from '@mui/material';

function InsightsSection() {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState({ title: '', content: [] });

  const handleOpenDialog = (title, content) => {
    setDialogContent({ title, content });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const insights = [
    {
      title: 'Prezzo Competitivo',
      description: 'Ridurre il prezzo a €4,50 potrebbe aumentare l’appetibilità del prodotto nel segmento medio.',
      details: [
        'Competitor come Milka offrono un prezzo più competitivo.',
        'L’elasticità del prezzo mostra che una riduzione di €0,50 potrebbe portare a un aumento del 20% delle vendite.',
        'Ridurre il prezzo a €4,50 migliora l’appetibilità nel segmento medio.',
        'Analisi storiche mostrano che una riduzione del prezzo del 10% incrementa il volume di vendita del 15%.',
        'Offerte stagionali con riduzioni temporanee possono aumentare l’interesse dei consumatori.',
      ],
    },
    {
      title: 'Innovazione',
      description: 'Aggiungi una caratteristica unica, come "ingredienti biologici".',
      details: [
        'Implementare ingredienti biologici aumenterebbe la percezione di qualità.',
        'L’aggiunta di un packaging interattivo può aumentare il coinvolgimento del cliente.',
        'La creazione di edizioni limitate spinge l’urgenza di acquisto.',
        'Sviluppare partnership con startup tecnologiche può differenziare il prodotto.',
        'I competitor non hanno ancora esplorato queste opportunità nel mercato locale.',
      ],
    },
    {
      title: 'Social Media',
      description: 'Incrementare le collaborazioni con influencer migliora l’engagement.',
      details: [
        'Il brand ha un engagement inferiore del 15% su Instagram rispetto ai competitor.',
        'Collaborazioni mirate con micro-influencer hanno una conversione migliore.',
        'L’uso di video brevi aumenta le interazioni del 30%.',
        'Creare campagne di hashtag specifici migliora la visibilità organica.',
        'Un aumento del budget pubblicitario su TikTok può raggiungere il target giovane.',
      ],
    },
    {
      title: 'Sostenibilità',
      description: 'Il claim "Packaging riciclato al 90%" è fortemente apprezzato.',
      details: [
        'Gli acquirenti giovani prediligono prodotti eco-friendly.',
        'Inserire un logo certificato aumenta la fiducia dei consumatori.',
        'La sostenibilità è una delle principali leve di acquisto per il 65% dei consumatori.',
        'Ridurre l’impatto ambientale del trasporto migliora la percezione del marchio.',
        'Analisi di mercato mostrano una crescita annuale del 12% nel settore della sostenibilità.',
      ],
    },
    {
      title: 'Neuromarketing',
      description: 'Focus su attenzione visiva e engagement emotivo del target.',
      details: [
        'La confezione attira il 60% dell’attenzione visiva rispetto ai competitor.',
        'I colori utilizzati aumentano il richiamo del brand del 25%.',
        'L’analisi FACS mostra emozioni positive associate al prodotto.',
        'Gli spot pubblicitari con musiche coinvolgenti incrementano l’engagement emotivo.',
        'Esperimenti di eye-tracking indicano che il logo è facilmente individuabile.',
      ],
    },
    {
      title: 'Sensoriale',
      description: 'Preferenze rilevate per sapore e texture.',
      details: [
        'Il 78% dei tester preferisce il sapore nocciola rispetto ai competitor.',
        'La texture croccante ottiene un punteggio medio di 8/10.',
        'Il retrogusto è percepito come più autentico rispetto alla media di mercato.',
        'Le proprietà sensoriali influenzano il 70% delle decisioni di acquisto.',
        'Aggiungere varianti di gusto aumenterebbe il potenziale di mercato.',
      ],
    },
    {
      title: 'Momento di Consumo',
      description: 'Identifica le situazioni ideali per il consumo del prodotto.',
      details: [
        'Colazione rappresenta il 40% del consumo complessivo.',
        'Snack pomeridiano ha una percezione del 70% più salutare rispetto ai competitor.',
        'I regali rappresentano una nicchia con potenziale di crescita del 30%.',
        'Consumatori preferiscono il prodotto durante viaggi brevi.',
        'Pacchetti multipack favoriscono il consumo condiviso.',
      ],
    },
    {
      title: 'Target Demografico',
      description: 'Dettagli su età, stile di vita e preferenze.',
      details: [
        'Il prodotto è apprezzato principalmente dai giovani adulti (25-34 anni).',
        'Famiglie con bambini rappresentano un target secondario in crescita.',
        'Consumatori attivi preferiscono il packaging riciclabile.',
        'I millennials preferiscono prodotti con claim di autenticità.',
        'La Generazione Z è particolarmente attratta da confezioni innovative.',
      ],
    },
  ];

  return (
    <Box sx={{ p: 4, backgroundColor: '#f9f9f9', borderRadius: '12px' }}>
      <Typography variant="h5" sx={{ mb: 4, fontWeight: 'bold' }}>
        Insights e Raccomandazioni
      </Typography>

      <Grid container spacing={4}>
        {insights.map((insight, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              variant="outlined"
              sx={{
                borderRadius: '12px',
                backgroundColor: '#ffffff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {insight.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {insight.description}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() =>
                    handleOpenDialog(insight.title, insight.details)
                  }
                >
                  Approfondisci
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '16px',
            padding: '16px',
            backgroundColor: '#fefefe',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <DialogTitle>{dialogContent.title}</DialogTitle>
        <DialogContent dividers sx={{ padding: '16px 24px' }}>
          {dialogContent.content.map((item, index) => (
            <Typography key={index} variant="body1" sx={{ mb: 2 }}>
              • {item}
            </Typography>
          ))}
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCloseDialog}
          >
            Chiudi
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default InsightsSection;






