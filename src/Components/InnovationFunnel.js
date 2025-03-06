import React from "react";
import { Box, Typography } from "@mui/material";

function InnovationFunnelHorizontalStatic() {
  // Configurazioni base del funnel
  const numStages = 5;
  const stageWidth = 200;             // larghezza orizzontale per ogni fase
  const maxHeight = 200;              // altezza massima (fase iniziale)
  const minHeight = 32;               // altezza minima (fase finale)
  const offset = 25;                  // margine attorno al disegno

  // Calcolo dei bordi verticali lungo l'asse X.
  // Per ciascun indice i (da 0 a numStages) calcoliamo:
  // - height_i = maxHeight - ((maxHeight - minHeight) * (i / numStages))
  // - top_i = (maxHeight - height_i) / 2
  // - bottom_i = top_i + height_i
  const boundaries = [];
  for (let i = 0; i <= numStages; i++) {
    const currentHeight = maxHeight - ((maxHeight - minHeight) * (i / numStages));
    const top = (maxHeight - currentHeight) / 2;
    const bottom = top + currentHeight;
    boundaries.push({ top, bottom });
  }

  // Stato statico delle idee.
  // Ogni idea ha:
  //  - id: identificativo
  //  - stageIndex: indice della fase corrente (0 ... numStages - 1)
  //  - progress: percentuale (0 = inizio, 1 = fine) della posizione all'interno della fase
  const ideas = [
    { id: 1, stageIndex: 0, progress: 0 },
    { id: 2, stageIndex: 1, progress: 0.5 },
    { id: 3, stageIndex: 2, progress: 0.3 },
  ];

  // Etichette delle fasi
  const stageLabels = ["Ideation", "Evaluation", "Prototyping", "Testing", "Implementation"];

  return (
    <Box sx={{ mt: 4, textAlign: "center" }}>
      <Typography variant="h5" gutterBottom>
        Innovation Funnel (Statico)
      </Typography>
      <svg
        width={stageWidth * numStages + offset * 2}
        height={maxHeight + offset * 2}
        viewBox={`0 0 ${stageWidth * numStages + offset * 2} ${maxHeight + offset * 2}`}
      >
        <defs>
          <linearGradient id="funnelGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4a90e2" />
            <stop offset="100%" stopColor="#003366" />
          </linearGradient>
        </defs>

        {/* Disegno delle fasi del funnel */}
        {Array.from({ length: numStages }, (_, stageIndex) => {
          // Per ciascuna fase, utilizziamo i bordi calcolati:
          // - lato sinistro: boundaries[stageIndex]
          // - lato destro: boundaries[stageIndex+1]
          const x0 = stageIndex * stageWidth;
          const x1 = (stageIndex + 1) * stageWidth;
          const { top: top0, bottom: bottom0 } = boundaries[stageIndex];
          const { top: top1, bottom: bottom1 } = boundaries[stageIndex + 1];
          const points = `
            ${x0 + offset},${top0 + offset}
            ${x0 + offset},${bottom0 + offset}
            ${x1 + offset},${bottom1 + offset}
            ${x1 + offset},${top1 + offset}
          `;
          // Centro per l'etichetta
          const center = {
            cx: (x0 + x1) / 2 + offset,
            cy: (top0 + bottom0 + top1 + bottom1) / 4 + offset,
          };
          return (
            <g key={stageIndex}>
              <polygon points={points} fill="url(#funnelGradient)" stroke="black" strokeWidth="2" />
              <text x={center.cx} y={center.cy - 10} textAnchor="middle" fontSize="16" fill="black">
                {stageLabels[stageIndex]}
              </text>
            </g>
          );
        })}

        {/* Disegno delle idee statiche */}
        {ideas.map((idea) => {
          const stageIndex = idea.stageIndex;
          const x0 = stageIndex * stageWidth;
          const x1 = (stageIndex + 1) * stageWidth;
          // Calcola la posizione orizzontale in base a idea.progress
          const x = x0 + idea.progress * stageWidth + offset;

          // Per il calcolo della posizione verticale:
          // usiamo l'interpolazione lineare fra i bordi superiore ed inferiore della fase
          const { top: top0, bottom: bottom0 } = boundaries[stageIndex];
          const { top: top1, bottom: bottom1 } = boundaries[stageIndex + 1];
          const yTop = top0 + (top1 - top0) * idea.progress;
          const yBottom = bottom0 + (bottom1 - bottom0) * idea.progress;
          const y = (yTop + yBottom) / 2 + offset;

          return (
            <circle
              key={idea.id}
              cx={x}
              cy={y}
              r={10}
              fill="white"
              stroke="black"
              strokeWidth="2"
              style={{ filter: "drop-shadow(2px 2px 3px rgba(0,0,0,0.3))" }}
            />
          );
        })}
      </svg>
    </Box>
  );
}

export default InnovationFunnelHorizontalStatic;





























