export const fetchSurveyResponse = async (question, target, mode = "survey", participants = 100) => {
    const API_KEY = "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"; // Sostituisci con la tua chiave API
    const endpoint = "https://api.openai.com/v1/chat/completions";

    let systemPrompt = "";

    if (mode === "survey") {
        systemPrompt = `Sei un esperto di ricerche di mercato. Il tuo compito è generare **10 domande di survey** basate sul tema fornito dall'utente. 
        Ogni domanda deve essere chiara, breve e utile per raccogliere dati quantitativi.
        **Formatta l'output come una lista numerata**, senza testo aggiuntivo o spiegazioni.`;
    } else if (mode === "results") {
        systemPrompt = `Sei un esperto analista di ricerche di mercato. Ti fornirò una domanda di survey a cui hanno risposto ${participants} partecipanti.
        Il tuo compito è generare un report **professionale e sintetico**, con una struttura chiara, senza testo ridondante. 
    
        📌 **Formato del Report**:
        - **Titolo della Domanda**: [Riscrivi la domanda qui]
        - **Sintesi Chiave (Max 3 righe)**: Riassumi le principali tendenze emerse in modo chiaro e numerico.
        - **Dati Quantitativi (Tabella)**: Mostra i risultati sotto forma di percentuali (somma sempre 100%).

        📊 **Esempio Tabella Risultati:**
        | Risposta | Percentuale |
        |----------|-------------|
        | Molto d'accordo | 45% |
        | D'accordo | 30% |
        | Neutro | 15% |
        | In disaccordo | 5% |
        | Molto in disaccordo | 5% |

        💬 **Citazioni (3 esempi brevi e significativi)**:
        - "Trovo il prodotto molto innovativo, ma migliorabile in alcuni aspetti."
        - "Non noto molte differenze rispetto ad altri prodotti simili."
        - "L'idea è buona, ma servirebbe un packaging più sostenibile."

        ❗ **Regole Importanti**:
        - **NON** generare paragrafi lunghi.
        - **NON** aggiungere testo esplicativo extra.
        - **Genera un report chiaro e visivamente strutturato.**`;
    }

    const payload = {
        model: "gpt-4-turbo",
        messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: `Domanda della survey: ${question}. Target: ${target}` }
        ],
        temperature: 0.7
    };

    try {
        console.log(`📩 Inviando richiesta a OpenAI per modalità: ${mode} con ${participants} partecipanti...`);
        console.log("📌 Payload inviato:", JSON.stringify(payload, null, 2));

        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        console.log("✅ Risposta ricevuta:", data);

        return data.choices[0].message.content;
    } catch (error) {
        console.error("❌ Errore API OpenAI:", error);
        return "Errore nella generazione della risposta.";
    }
};













