// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5001;  // Assicurati che questa sia la porta corretta

// Abilita CORS
app.use(cors());

// Middleware per il parsing del JSON nel body delle richieste
app.use(express.json());

// Endpoint di test per verificare che il server sia attivo
app.get('/ping', (req, res) => {
    res.send("Server attivo e funzionante");
});

// Endpoint principale per il chatbot
app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;  // Ottieni il messaggio dell'utente dal frontend
    console.log("Messaggio ricevuto dal frontend:", userMessage);

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: userMessage }],
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,  // Assicurati che sia esatto
                    'Content-Type': 'application/json',
                },
            }
        );

        // Ottieni la risposta dal modello
        const botResponse = response.data.choices[0].message.content;
        console.log("Risposta dal modello:", botResponse);
        res.json({ response: botResponse });

    } catch (error) {
        console.error("Errore nella chiamata API:", error);

        // Se c'è un errore nella chiamata API, logga la risposta completa dell'errore
        if (error.response) {
            console.error("Dettagli dell'errore:", error.response.data);
        }

        res.status(500).json({ response: "Errore nella risposta dal server." });
    }
});

app.listen(PORT, () => {
    console.log(`Server in ascolto sulla porta ${PORT}`);
});


