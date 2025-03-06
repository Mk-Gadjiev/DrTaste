import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem, Checkbox, FormControlLabel, Button } from '@mui/material';
import { fetchSurveyResponse } from '../../chatgptSurveyAPI';

const TestConfigurationDashboard = ({ onGenerateSurvey, researchMode }) => {
    const [config, setConfig] = useState({
        participants: 2, // Impostiamo un valore di default
        questionType: 'aperta',
        researchObjective: '',
        researchQuestion: '',
        selectedThemes: [],
        generatedQuestions: [],
    });

    const [loading, setLoading] = useState(false);

    // Opzioni disponibili
    const themesOptions = [
        'Familiarità del Target con il Prodotto',
        'Benefici Percepiti',
        'Barriere all\'Acquisto',
        'Scenario d\'Uso Simulato',
        'Formato Preferito',
        'Attributi Sensoriali Specifici',
        'Similitudine con Prodotti Esistenti',
        'Ricordi Indotti dal Concept',
        'Livello di Curiosità Generato',
    ];

    const researchObjectives = [
        'Comprensione Concept',
        'Gradimento Prodotto',
        'Esplorazione Idea',
    ];

    const participantsOptions = [2, 5, 10, 20, 50]; // Aggiunto "2" come opzione

    // Gestione input
    const handleInputChange = (field, value) => {
        setConfig({ ...config, [field]: value });
    };

    const handleThemeChange = (theme) => {
        const updatedThemes = config.selectedThemes.includes(theme)
            ? config.selectedThemes.filter((t) => t !== theme)
            : [...config.selectedThemes, theme];
        setConfig({ ...config, selectedThemes: updatedThemes });
    };

    // Generazione delle domande
    const handleGenerateSurvey = async () => {
        setLoading(true);

        const surveyTheme = config.selectedThemes.join(", ");
        console.log("📝 Generazione survey per tema:", surveyTheme);

        const surveyQuestions = await fetchSurveyResponse(
            surveyTheme, 
            "Consumatori target", 
            "survey",
            config.participants // Passiamo il numero di partecipanti
        );

        if (!surveyQuestions || surveyQuestions.length === 0) {
            console.error("❌ Errore: Nessuna domanda ricevuta dall'API.");
            setLoading(false);
            return;
        }

        console.log("✅ Domande ricevute:", surveyQuestions);

        // Trasforma la risposta API in un array di domande
        const formattedQuestions = surveyQuestions.split("\n").map((q, index) => ({
            id: index + 1,
            text: q.trim(),
            type: config.questionType,
        }));

        console.log("📩 Domande formattate:", formattedQuestions);

        setConfig({ ...config, generatedQuestions: formattedQuestions });
        onGenerateSurvey(formattedQuestions);

        setLoading(false);
    };

    return (
        <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: '8px', mt: 2 }}>
            <Typography variant="h6">Configurazione del Test</Typography>

            {/* Numero di Partecipanti */}
            <Typography variant="body2" sx={{ mt: 2 }}>Numero di Partecipanti:</Typography>
            <Select
                value={config.participants}
                onChange={(e) => handleInputChange('participants', e.target.value)}
                fullWidth
                sx={{ mt: 1 }}
            >
                {participantsOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option} Partecipanti
                    </MenuItem>
                ))}
            </Select>

            {/* Tipo di Domande */}
            <Typography variant="body2" sx={{ mt: 2 }}>Tipo di Domande:</Typography>
            <Select
                value={config.questionType}
                onChange={(e) => handleInputChange('questionType', e.target.value)}
                fullWidth
                sx={{ mt: 1 }}
            >
                <MenuItem value="aperta">Aperta</MenuItem>
                <MenuItem value="chiusa">Chiusa</MenuItem>
                <MenuItem value="mista">Mista</MenuItem>
            </Select>

            {/* Obiettivo del Test */}
            <Typography variant="body2" sx={{ mt: 2 }}>Obiettivo del Test:</Typography>
            <Select
                value={config.researchObjective}
                onChange={(e) => handleInputChange('researchObjective', e.target.value)}
                fullWidth
                sx={{ mt: 1 }}
            >
                {researchObjectives.map((obj, index) => (
                    <MenuItem key={index} value={obj}>
                        {obj}
                    </MenuItem>
                ))}
            </Select>

            {/* Temi da Indagare */}
            <Typography variant="body2" sx={{ mt: 2 }}>Temi da Indagare:</Typography>
            {themesOptions.map((theme, index) => (
                <FormControlLabel
                    key={index}
                    control={
                        <Checkbox
                            checked={config.selectedThemes.includes(theme)}
                            onChange={() => handleThemeChange(theme)}
                        />
                    }
                    label={theme}
                />
            ))}

            {/* Bottone per Generare la Survey */}
            <Button
                variant="contained"
                onClick={handleGenerateSurvey}
                sx={{ mt: 3, backgroundColor: '#3f51b5', color: 'white' }}
                disabled={loading}
            >
                {loading ? "Generazione in corso..." : "Genera Survey"}
            </Button>

            {/* Visualizzazione delle Domande Generate */}
            {config.generatedQuestions.length > 0 && (
                <Box sx={{ mt: 3 }}>
                    <Typography variant="h6">Survey Strutturata:</Typography>
                    {config.generatedQuestions.map((q) => (
                        <Typography key={q.id} sx={{ mt: 1 }}>
                            {q.id}. {q.text}
                        </Typography>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default TestConfigurationDashboard;










