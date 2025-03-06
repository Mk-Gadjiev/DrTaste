const API_KEY = "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"; // 🔴 Inserisci la tua API Key qui!

const getPromptForAnalysis = (analysisType, ideaDescription) => {
  switch (analysisType) {
    case "sensorial":
      return `Sei un esperto di analisi sensoriale nel settore food & beverage.
Devi valutare un nuovo prodotto basandoti su criteri sensoriali come gusto, texture, aroma e aspetto visivo.
Analizza il prodotto descritto qui sotto e fornisci un report dettagliato su:
- Le note gustative principali (dolce, amaro, acido, umami, ecc.)
- La texture percepita (croccante, morbida, granulosa, cremosa, ecc.)
- L'aroma dominante e secondario
- Il possibile appeal per il target di consumatori
- Eventuali punti critici o miglioramenti consigliati

Descrizione del prodotto: ${ideaDescription}`;

    case "aiInsights":
      return `Sei un esperto di marketing per il settore food & beverage.
Analizza il seguente prodotto e fornisci insight di mercato basati su:
- Tendenze di mercato attuali e future
- Possibili segmenti di consumatori interessati
- Strategie di branding e posizionamento
- Punti di forza e debolezza rispetto alla concorrenza
- Suggerimenti per il miglioramento del concept

Descrizione del prodotto: ${ideaDescription}`;

    case "neuromarketing":
      return `Sei un esperto di neuromarketing e psicologia del consumatore.
Analizza il seguente prodotto e rispondi su:
- Quali emozioni principali potrebbe suscitare nei consumatori
- Quali bias cognitivi potrebbero influenzarne la percezione
- Quali colori, design e packaging potrebbero aumentare l’attrattiva
- Quali leve persuasive potrebbero essere usate nella comunicazione
- Possibili trigger psicologici per incentivare l'acquisto

Descrizione del prodotto: ${ideaDescription}`;

    case "conceptualMap":
      return `Sei un esperto di strategie di posizionamento e branding nel settore food & beverage.
Devi generare una mappa concettuale per il seguente prodotto, in modo da visualizzare un quadrante a 4 sezioni.
Fornisci in output un JSON valido con la seguente struttura:
{
  "xAxis": "Nome del lato sinistro dell’asse X (es. 'Funzionalità')",
  "xAxisOpposite": "Nome del lato destro dell’asse X (es. 'Esperienza Sensoriale')",
  "yAxis": "Nome del lato inferiore dell’asse Y (es. 'Salute')",
  "yAxisOpposite": "Nome del lato superiore dell’asse Y (es. 'Indulgenza')",
  "competitorPositions": [
    { "name": "Nome del competitor", "x": numero da 0 a 10, "y": numero da 0 a 10, "r": (opzionale, dimensione della bolla), "color": (opzionale) }
    // ... altri competitor
  ],
  "whiteSpaces": [
    { "label": "Descrizione dello spazio vuoto", "x": numero da 0 a 10, "y": numero da 0 a 10, "r": (opzionale) }
    // ... altri white spaces
  ],
  "needStates": {
    "quadrante1": "Descrizione del need state per il quadrante 1 (es. 'Comfort quotidiano')",
    "quadrante2": "Descrizione del need state per il quadrante 2 (es. 'Energia immediata')",
    "quadrante3": "Descrizione del need state per il quadrante 3 (es. 'Tradizione e Sicurezza')",
    "quadrante4": "Descrizione del need state per il quadrante 4 (es. 'Innovazione e Indulgenza')"
  },
  "suggestion": "Suggerimenti strategici per il posizionamento del prodotto, ad esempio evidenziare un white space o differenziarsi dalla concorrenza."
}

Includi anche le principali associazioni concettuali, i valori e i bisogni soddisfatti dal prodotto, le parole chiave e le categorie di prodotto simili o complementari.
Fornisci solo il JSON, senza testo aggiuntivo.

Descrizione del prodotto: ${ideaDescription}`;

    default:
      return `Analizza questa idea di prodotto e fornisci insight dettagliati: ${ideaDescription}`;
  }
};

export const generateInsights = async (analysisType, ideaDescription) => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "Sei un esperto di food & beverage. Fornisci analisi dettagliate per nuovi prodotti.",
          },
          {
            role: "user",
            content: getPromptForAnalysis(analysisType, ideaDescription),
          },
        ],
        max_tokens: 500, // Aumentato il numero di token per una risposta più dettagliata
      }),
    });

    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error(`Errore nella generazione degli insight per ${analysisType}:`, error);
    return "Errore nella generazione degli insight.";
  }
};
