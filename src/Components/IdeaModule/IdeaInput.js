import React from 'react';
import { Box, TextField, Button, Typography, Grid, Card, CardContent } from '@mui/material';

function IdeaInput({
  ideaName,
  setIdeaName,
  ideaDescription,
  setIdeaDescription,
  target,
  setTarget,
  brand,
  setBrand,
  consumptionMoments,
  setConsumptionMoments,
  competition,
  setCompetition,
  keywords,
  setKeywords,
  additionalDetails,
  setAdditionalDetails,
  usp,
  setUsp,
  distribution,
  setDistribution,
  sentiment,
  setSentiment,
  onSubmit
}) {
  return (
    <Card sx={{ maxWidth: 800, mx: 'auto', mt: 4, p: 2, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
          Inserisci il Brief del Tuo Prodotto
        </Typography>
        <Grid container spacing={2}>
          {/* Campi obbligatori */}
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Nome dell'Idea *"
              value={ideaName}
              onChange={(e) => setIdeaName(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Descrizione dell'Idea *"
              value={ideaDescription}
              onChange={(e) => setIdeaDescription(e.target.value)}
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid>
          {/* Campi opzionali */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Target di Consumatori"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              helperText="Es. giovani, adulti, salutisti"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Brand / Valori"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              helperText="Es. sostenibilità, innovazione, tradizione"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Momenti di Consumo"
              value={consumptionMoments}
              onChange={(e) => setConsumptionMoments(e.target.value)}
              helperText="Es. colazione, snack, cena"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Competition"
              value={competition}
              onChange={(e) => setCompetition(e.target.value)}
              helperText="Es. marchi o segmenti competitivi"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Parole Chiave"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              helperText="Separale con una virgola"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Dettagli Aggiuntivi"
              value={additionalDetails}
              onChange={(e) => setAdditionalDetails(e.target.value)}
              multiline
              rows={3}
              helperText="Ulteriori informazioni utili per l'analisi"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="USP (Proposta di Valore)"
              value={usp}
              onChange={(e) => setUsp(e.target.value)}
              helperText="Cosa rende il prodotto unico"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Canali di Distribuzione"
              value={distribution}
              onChange={(e) => setDistribution(e.target.value)}
              helperText="Es. online, retail, food service"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Sentiment / Tone of Voice"
              value={sentiment}
              onChange={(e) => setSentiment(e.target.value)}
              helperText="Descrivi il tono e le emozioni che il prodotto dovrebbe evocare"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: 'primary.main', color: '#fff', px: 4 }}
            onClick={onSubmit}
            disabled={!ideaName || !ideaDescription}
          >
            Salva e Analizza
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default IdeaInput;







