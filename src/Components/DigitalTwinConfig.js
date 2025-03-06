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
} from "@mui/material";
import DigitalTwinChat from "./DigitalTwinChat";
import DigitalTwinDetail from "./DigitalTwinDetail";

const DigitalTwinConfig = () => {
  const [twinList, setTwinList] = useState([]);
  const [showConfig, setShowConfig] = useState(false);
  const [twinType, setTwinType] = useState("sintetico");
  const [targetDetails, setTargetDetails] = useState({
    gender: "",
    education: "",
    profession: "",
    income: "",
    interests: [],
    snack_healthy: "",
    snack_sweet: "",
    theme: "",
    idea: "",
  });
  const [selectedTwin, setSelectedTwin] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);

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

  const handleTargetChange = (field, value) => {
    setTargetDetails({ ...targetDetails, [field]: value });
  };

  const handleGenerateTwin = () => {
    // Qui puoi aggiungere una validazione se necessario
    const newTwin = {
      ...targetDetails,
      type: twinType,
      id: twinList.length + 1,
    };
    setTwinList([...twinList, newTwin]);
    setShowConfig(false);
  };

  const handleOpenChat = (twin) => {
    console.log("Apri chat per:", twin);
    setSelectedTwin(twin);
    setChatOpen(true);
  };

  const handleOpenDetail = (twin) => {
    console.log("Apri dettagli per:", twin);
    setSelectedTwin(twin);
    setDetailOpen(true);
  };

  return (
    <Box sx={{ p: 4, maxWidth: 1000, mx: "auto" }}>
      {/* Lista Digital Twin */}
      {twinList.length > 0 && (
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {twinList.map((twin, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                sx={{
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  boxShadow: 3,
                  borderRadius: 2,
                  textAlign: "center",
                }}
              >
                <Typography variant="h6">
                  🤖 {twin.gender || "Anonimo"}
                </Typography>
                <Typography variant="body2">
                  🎓 {twin.profession || "N/A"}
                </Typography>
                <Typography variant="body2">
                  📌 {twin.interests.join(", ") || "Nessuno"}
                </Typography>
                <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                  <Button
                    variant="outlined"
                    onClick={() => handleOpenChat(twin)}
                  >
                    💬 Chat
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => handleOpenDetail(twin)}
                  >
                    🔍 Espandi
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Bottone per aprire il form di creazione */}
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

      {/* Form di Configurazione Digital Twin */}
      {showConfig && (
        <Paper sx={{ mt: 4, p: 4 }}>
          <Typography variant="h5">⚙️ Configura il Digital Twin</Typography>
          {/* Tipo di Digital Twin */}
          <Typography variant="h6" sx={{ mt: 3 }}>
            🧠 Tipo di Digital Twin
          </Typography>
          <Select
            fullWidth
            value={twinType}
            onChange={(e) => setTwinType(e.target.value)}
            sx={{ mt: 1 }}
          >
            <MenuItem value="sintetico">
              🤖 Sintetico (LLM-based)
            </MenuItem>
            <MenuItem value="replicante" disabled>
              🧠 Replicante (non disponibile)
            </MenuItem>
          </Select>
          {/* Target */}
          <Typography variant="h6" sx={{ mt: 3 }}>
            🎯 Target
          </Typography>
          <Select
            fullWidth
            value={targetDetails.gender}
            onChange={(e) => handleTargetChange("gender", e.target.value)}
            sx={{ mt: 1 }}
          >
            <MenuItem value="Maschio">Maschio</MenuItem>
            <MenuItem value="Femmina">Femmina</MenuItem>
          </Select>
          <Select
            fullWidth
            value={targetDetails.education}
            onChange={(e) => handleTargetChange("education", e.target.value)}
            sx={{ mt: 2 }}
          >
            <MenuItem value="Scuola Superiore">Scuola Superiore</MenuItem>
            <MenuItem value="Università">Università</MenuItem>
            <MenuItem value="Master/PhD">Master/PhD</MenuItem>
          </Select>
          {/* Frequenza di acquisto */}
          <Typography variant="h6" sx={{ mt: 3 }}>
            🍏 Frequenza di Acquisto Snack Salutari
          </Typography>
          <Select
            fullWidth
            value={targetDetails.snack_healthy}
            onChange={(e) =>
              handleTargetChange("snack_healthy", e.target.value)
            }
            sx={{ mt: 1 }}
          >
            {snackFrequencies.map((freq, index) => (
              <MenuItem key={index} value={freq}>
                {freq}
              </MenuItem>
            ))}
          </Select>
          <Typography variant="h6" sx={{ mt: 3 }}>
            🍫 Frequenza di Acquisto Snack Dolci
          </Typography>
          <Select
            fullWidth
            value={targetDetails.snack_sweet}
            onChange={(e) =>
              handleTargetChange("snack_sweet", e.target.value)
            }
            sx={{ mt: 1 }}
          >
            {snackFrequencies.map((freq, index) => (
              <MenuItem key={index} value={freq}>
                {freq}
              </MenuItem>
            ))}
          </Select>
          {/* Tema */}
          <Typography variant="h6" sx={{ mt: 3 }}>
            🌍 Tema
          </Typography>
          <TextField
            fullWidth
            placeholder="Inserisci un tema..."
            value={targetDetails.theme}
            onChange={(e) =>
              handleTargetChange("theme", e.target.value)
            }
            sx={{ mt: 1 }}
          />
          {/* Idea */}
          <Typography variant="h6" sx={{ mt: 3 }}>
            💡 Basato su Idea (opzionale)
          </Typography>
          <Select
            fullWidth
            value={targetDetails.idea}
            onChange={(e) =>
              handleTargetChange("idea", e.target.value)
            }
            sx={{ mt: 1 }}
          >
            <MenuItem value="">-- Nessuna Idea Selezionata --</MenuItem>
            {availableIdeas.map((idea, index) => (
              <MenuItem key={index} value={idea}>
                {idea}
              </MenuItem>
            ))}
          </Select>
          {/* Bottone per generare */}
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

export default DigitalTwinConfig;




















