import React from 'react';
import { Box, Typography } from '@mui/material';

function ConceptualMap({ mappingData }) {
  // Se mappingData non è definito, non renderizza nulla
  if (!mappingData) return null;

  // Dimensioni dell'area SVG
  const width = 600;
  const height = 600;

  // Funzione per convertire le coordinate (range 0-10) in coordinate SVG
  // Nota: in SVG l'asse y va dall'alto (0) al basso (height), mentre noi vogliamo che 0 sia in basso.
  const scaleX = (x) => (x / 10) * width;
  const scaleY = (y) => height - (y / 10) * height;

  // Costruiamo gli elementi SVG per i competitor
  const competitorElements = mappingData.competitorPositions.map((comp, index) => {
    const cx = scaleX(comp.x);
    const cy = scaleY(comp.y);
    const r = comp.r || 15;
    return (
      <g key={`comp-${index}`}>
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill={comp.color || 'rgba(54, 162, 235, 0.7)'}
          stroke={comp.borderColor || 'rgba(54, 162, 235, 1)'}
          strokeWidth="2"
        />
        <text x={cx} y={cy - r - 5} textAnchor="middle" fontSize="14" fill="#333">
          {comp.name}
        </text>
      </g>
    );
  });

  // Costruiamo gli elementi SVG per i white spaces (bolle con bordo tratteggiato)
  const whiteSpaceElements = mappingData.whiteSpaces.map((ws, index) => {
    const cx = scaleX(ws.x);
    const cy = scaleY(ws.y);
    const r = ws.r || 10;
    return (
      <g key={`ws-${index}`}>
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="rgba(76, 175, 80, 0.3)"
          stroke="rgba(76, 175, 80, 1)"
          strokeWidth="2"
          strokeDasharray="5,5"
        />
        <text x={cx} y={cy - r - 5} textAnchor="middle" fontSize="12" fill="#333">
          {ws.label}
        </text>
      </g>
    );
  });

  return (
    <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Titolo con gli assi */}
      <Typography variant="h6" align="center" gutterBottom>
        {mappingData.xAxis} ↔ {mappingData.xAxisOpposite} / {mappingData.yAxis} ↔ {mappingData.yAxisOpposite}
      </Typography>
      {/* Suggerimento testuale, se presente */}
      {mappingData.suggestion && (
        <Typography variant="body1" align="center" sx={{ mb: 1, fontStyle: 'italic' }}>
          {mappingData.suggestion}
        </Typography>
      )}
      <svg width={width} height={height} style={{ border: '1px solid #ccc' }}>
        {/* Linea verticale centrale */}
        <line x1={width / 2} y1={0} x2={width / 2} y2={height} stroke="#666" strokeWidth="2" strokeDasharray="4,4" />
        {/* Linea orizzontale centrale */}
        <line x1={0} y1={height / 2} x2={width} y2={height / 2} stroke="#666" strokeWidth="2" strokeDasharray="4,4" />

        {/* Etichette degli assi */}
        {/* Asse X sinistra e destra */}
        <text x={10} y={height / 2 - 10} fontSize="14" fill="#000">
          {mappingData.xAxis}
        </text>
        <text x={width - 10} y={height / 2 - 10} textAnchor="end" fontSize="14" fill="#000">
          {mappingData.xAxisOpposite}
        </text>
        {/* Asse Y in basso e in alto */}
        <text x={width / 2 + 10} y={height - 10} fontSize="14" fill="#000">
          {mappingData.yAxis}
        </text>
        <text x={width / 2 + 10} y={20} fontSize="14" fill="#000">
          {mappingData.yAxisOpposite}
        </text>

        {/* Disegno competitor */}
        {competitorElements}
        {/* Disegno white spaces */}
        {whiteSpaceElements}
      </svg>
    </Box>
  );
}

export default ConceptualMap;



