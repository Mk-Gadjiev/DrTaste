import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Select,
  MenuItem,
  TextField,
  Paper,
  Grid,
  Card,
  CardHeader,
  CardActions,
  Avatar,
  IconButton,
  Slider,
} from "@mui/material";
import { ChatBubbleOutline, ZoomIn } from "@mui/icons-material";
import DigitalTwinChat from "./DigitalTwinChat"; // Controlla il percorso
import DigitalTwinDetail from "./DigitalTwinDetail"; // Controlla il percorso

const PersonasPage = () => {
  // Stato per la lista dei twin e per il form
  const [twinList, setTwinList] = useState([]);
  const [showConfig, setShowConfig] = useState(false);
  const [twinType, setTwinType] = useState("sintetico");
  const [targetDetails, setTargetDetails] = useState({
    // Il campo nome verrà generato automaticamente
    gender: "",
    ageRange: "",
    country: "",
    income: "",
    lifestyle: "",
    diet: "",
    education: "",
    profession: "",
    interests: [],
    snack_healthy: "",
    snack_sweet: "",
    theme: "",
    idea: "",
    innovation: 50, // Propensione al cambiamento (0-100)
    project: "", // Nuovo campo: Progetto
  });
  const [selectedTwin, setSelectedTwin] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);

  // Opzioni per alcuni campi
  const ageRanges = ["18-25", "26-35", "36-45", "46-60", "60+"];
  const incomeOptions = ["Basso", "Medio", "Alto"];
  const lifestyleOptions = ["Attivo", "Sedentario", "Attento alla salute"];
  const dietOptions = ["Onnivoro", "Vegetariano", "Vegano", "Senza Glutine"];
  const availableIdeas = [
    "Wafer con crema alla mela",
    "Bevanda energetica bio",
    "Snack proteico",
  ];
  const snackFrequencies = [
    "1 volta al giorno",
    "3 volte a settimana",
    "1 volta a settimana",
    "1 volta al mese",
  ];
  const projectOptions = ["Progetto Alpha", "Progetto Beta", "Progetto Gamma"];

  // Lista di nomi casuali da assegnare automaticamente
  const randomNames = ["Aurora", "Luna", "Stella", "Orione", "Nova", "Cosmo", "Vega"];

  const handleTargetChange = (field, value) => {
    setTargetDetails({ ...targetDetails, [field]: value });
  };

  // Funzione per generare un nuovo Digital Twin
  const handleGenerateTwin = () => {
    if (!targetDetails.gender || !targetDetails.ageRange) {
      alert("Compila i campi obbligatori: Genere e Fascia d'età.");
      return;
    }
    const generatedName = randomNames[Math.floor(Math.random() * randomNames.length)];
    const newTwin = {
      ...targetDetails,
      name: generatedName,
      type: twinType,
      id: twinList.length + 1,
    };
    setTwinList([...twinList, newTwin]);
    setShowConfig(false);
  };

  const handleOpenChat = (twin) => {
    console.log("Apro chat per:", twin);
    setSelectedTwin(twin);
    setChatOpen(true);
  };

  const handleOpenDetail = (twin) => {
    console.log("Apro dettaglio per:", twin);
    setSelectedTwin(twin);
    setDetailOpen(true);
  };

  return (
    <Box sx={{ p: 4, maxWidth: 1200, mx: "auto" }}>
      {/* Dashboard: Visualizzazione dei Digital Twin con info essenziali */}
      {twinList.length > 0 && (
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {twinList.map((twin, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ boxShadow: 3 }}>
                <CardHeader
                  avatar={
                    <Avatar>
                      {twin.name ? twin.name.charAt(0) : "A"}
                    </Avatar>
                  }
                  title={twin.name || "Anonimo"}
                  subheader={`${twin.gender || "N/A"} | ${twin.ageRange || "Età non definita"}`}
                />
                <CardActions>
                  <IconButton onClick={() => handleOpenChat(twin)}>
                    <ChatBubbleOutline />
                  </IconButton>
                  <IconButton onClick={() => handleOpenDetail(twin)}>
                    <ZoomIn />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Bottone per aprire il form di configurazione */}
      {!showConfig && (
        <Button
          variant="contained"
          sx={{
            mt: 4,
            display: "block",
            mx: "auto",
            backgroundColor: "#6a0dad",
            color: "white",
            fontSize: "18px",
            padding: "14px 28px",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            ":hover": { backgroundColor: "#580c8c" },
          }}
          onClick={() => setShowConfig(true)}
        >
          ➕ Crea un Digital Twin
        </Button>
      )}

      {/* Form di configurazione del Digital Twin */}
      {showConfig && (
        <Paper sx={{ mt: 4, p: 4 }}>
          <Typography variant="h5">⚙️ Configura il Digital Twin</Typography>

          {/* Campo Fascia d'età */}
          <Typography variant="h6" sx={{ mt: 3 }}>⏳ Fascia d'età</Typography>
          <Select
            fullWidth
            value={targetDetails.ageRange}
            onChange={(e) => handleTargetChange("ageRange", e.target.value)}
            sx={{ mt: 1 }}
          >
            <MenuItem value="">-- Seleziona Fascia d'età --</MenuItem>
            {ageRanges.map((range, index) => (
              <MenuItem key={index} value={range}>{range}</MenuItem>
            ))}
          </Select>

          {/* Campo Paese */}
          <Typography variant="h6" sx={{ mt: 3 }}>🌍 Paese</Typography>
          <TextField
            fullWidth
            placeholder="Inserisci il paese..."
            value={targetDetails.country || ""}
            onChange={(e) => handleTargetChange("country", e.target.value)}
            sx={{ mt: 1 }}
          />

          {/* Campo Fascia di Reddito */}
          <Typography variant="h6" sx={{ mt: 3 }}>💰 Fascia di Reddito</Typography>
          <Select
            fullWidth
            value={targetDetails.income}
            onChange={(e) => handleTargetChange("income", e.target.value)}
            sx={{ mt: 1 }}
          >
            <MenuItem value="">-- Seleziona Fascia di Reddito --</MenuItem>
            {incomeOptions.map((option, index) => (
              <MenuItem key={index} value={option}>{option}</MenuItem>
            ))}
          </Select>

          {/* Campo Stile di Vita */}
          <Typography variant="h6" sx={{ mt: 3 }}>🏃‍♂️ Stile di Vita</Typography>
          <Select
            fullWidth
            value={targetDetails.lifestyle}
            onChange={(e) => handleTargetChange("lifestyle", e.target.value)}
            sx={{ mt: 1 }}
          >
            <MenuItem value="">-- Seleziona lo Stile di Vita --</MenuItem>
            {lifestyleOptions.map((option, index) => (
              <MenuItem key={index} value={option}>{option}</MenuItem>
            ))}
          </Select>

          {/* Campo Preferenze Alimentari */}
          <Typography variant="h6" sx={{ mt: 3 }}>🍽 Preferenze Alimentari</Typography>
          <Select
            fullWidth
            value={targetDetails.diet}
            onChange={(e) => handleTargetChange("diet", e.target.value)}
            sx={{ mt: 1 }}
          >
            <MenuItem value="">-- Seleziona Preferenza Alimentare --</MenuItem>
            {dietOptions.map((option, index) => (
              <MenuItem key={index} value={option}>{option}</MenuItem>
            ))}
          </Select>

          {/* Campo Propensione al Cambiamento */}
          <Typography variant="h6" sx={{ mt: 3 }}>
            🌟 Propensione al Cambiamento
          </Typography>
          <Slider
            value={targetDetails.innovation}
            onChange={(e, newValue) => handleTargetChange("innovation", newValue)}
            aria-labelledby="innovation-slider"
            valueLabelDisplay="auto"
            min={0}
            max={100}
            sx={{ mt: 1 }}
          />

          {/* Campo Progetto */}
          <Typography variant="h6" sx={{ mt: 3 }}>📁 Progetto</Typography>
          <Select
            fullWidth
            value={targetDetails.project || ""}
            onChange={(e) => handleTargetChange("project", e.target.value)}
            sx={{ mt: 1 }}
          >
            <MenuItem value="">-- Seleziona Progetto --</MenuItem>
            {projectOptions.map((option, index) => (
              <MenuItem key={index} value={option}>{option}</MenuItem>
            ))}
          </Select>

          {/* Campo Tipo di Digital Twin */}
          <Typography variant="h6" sx={{ mt: 3 }}>🧠 Tipo di Digital Twin</Typography>
          <Select
            fullWidth
            value={twinType}
            onChange={(e) => setTwinType(e.target.value)}
            sx={{ mt: 1 }}
          >
            <MenuItem value="sintetico">🤖 Sintetico (LLM-based)</MenuItem>
            <MenuItem value="replicante" disabled>🧠 Replicante (non disponibile)</MenuItem>
          </Select>

          {/* Campo Genere */}
          <Typography variant="h6" sx={{ mt: 3 }}>🎯 Genere</Typography>
          <Select
            fullWidth
            value={targetDetails.gender}
            onChange={(e) => handleTargetChange("gender", e.target.value)}
            sx={{ mt: 1 }}
          >
            <MenuItem value="Maschio">Maschio</MenuItem>
            <MenuItem value="Femmina">Femmina</MenuItem>
          </Select>

          {/* Campo Educazione */}
          <Typography variant="h6" sx={{ mt: 3 }}>🎓 Educazione</Typography>
          <Select
            fullWidth
            value={targetDetails.education}
            onChange={(e) => handleTargetChange("education", e.target.value)}
            sx={{ mt: 1 }}
          >
            <MenuItem value="Scuola Superiore">Scuola Superiore</MenuItem>
            <MenuItem value="Università">Università</MenuItem>
            <MenuItem value="Master/PhD">Master/PhD</MenuItem>
          </Select>

          {/* Campo Professione */}
          <Typography variant="h6" sx={{ mt: 3 }}>💼 Professione</Typography>
          <TextField
            fullWidth
            placeholder="Inserisci la professione..."
            value={targetDetails.profession}
            onChange={(e) => handleTargetChange("profession", e.target.value)}
            sx={{ mt: 1 }}
          />

          {/* Campi Snack, Tema e Idea */}
          <Typography variant="h6" sx={{ mt: 3 }}>🍏 Frequenza di Acquisto Snack Salutari</Typography>
          <Select
            fullWidth
            value={targetDetails.snack_healthy}
            onChange={(e) => handleTargetChange("snack_healthy", e.target.value)}
            sx={{ mt: 1 }}
          >
            {snackFrequencies.map((freq, index) => (
              <MenuItem key={index} value={freq}>{freq}</MenuItem>
            ))}
          </Select>

          <Typography variant="h6" sx={{ mt: 3 }}>🍫 Frequenza di Acquisto Snack Dolci</Typography>
          <Select
            fullWidth
            value={targetDetails.snack_sweet}
            onChange={(e) => handleTargetChange("snack_sweet", e.target.value)}
            sx={{ mt: 1 }}
          >
            {snackFrequencies.map((freq, index) => (
              <MenuItem key={index} value={freq}>{freq}</MenuItem>
            ))}
          </Select>

          <Typography variant="h6" sx={{ mt: 3 }}>🌍 Tema</Typography>
          <TextField
            fullWidth
            placeholder="Inserisci un tema..."
            value={targetDetails.theme}
            onChange={(e) => handleTargetChange("theme", e.target.value)}
            sx={{ mt: 1 }}
          />

          <Typography variant="h6" sx={{ mt: 3 }}>💡 Basato su Idea (opzionale)</Typography>
          <Select
            fullWidth
            value={targetDetails.idea}
            onChange={(e) => handleTargetChange("idea", e.target.value)}
            sx={{ mt: 1 }}
          >
            <MenuItem value="">-- Nessuna Idea Selezionata --</MenuItem>
            {availableIdeas.map((idea, index) => (
              <MenuItem key={index} value={idea}>{idea}</MenuItem>
            ))}
          </Select>

          <Button
            variant="contained"
            color="success"
            fullWidth
            sx={{ mt: 4 }}
            onClick={handleGenerateTwin}
          >
            🚀 Genera Digital Twin
          </Button>
        </Paper>
      )}

      {/* Dialog per la Chat */}
      <DigitalTwinChat
        twin={selectedTwin}
        open={chatOpen}
        onClose={() => setChatOpen(false)}
      />

      {/* Dialog per i Dettagli */}
      <DigitalTwinDetail
        twin={selectedTwin}
        open={detailOpen}
        onClose={() => setDetailOpen(false)}
      />
    </Box>
  );
};

export default PersonasPage;














































