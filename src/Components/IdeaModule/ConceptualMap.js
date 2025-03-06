import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

// Dati fittizi da usare se non viene passato mappingData
const dummyMappingData = {
  xAxis: "Funzionalità",
  xAxisOpposite: "Esperienza Sensoriale",
  yAxis: "Salute",
  yAxisOpposite: "Indulgenza",
  competitorPositions: [
    { name: "Brand A", x: 4, y: 7, r: 15, color: "rgba(54, 162, 235, 0.7)", borderColor: "rgba(54, 162, 235, 1)" },
    { name: "Brand B", x: 6, y: 4, r: 10, color: "rgba(255, 159, 64, 0.7)", borderColor: "rgba(255, 159, 64, 1)" }
  ],
  whiteSpaces: [
    { label: "Opportunità di Innovazione", x: 7, y: 2, r: 10 }
  ],
  needStates: {
    quadrante1: "Comfort quotidiano",
    quadrante2: "Energia immediata",
    quadrante3: "Tradizione e Sicurezza",
    quadrante4: "Innovazione e Indulgenza"
  },
  suggestion: "Sfrutta il white space nel quadrante 4 per posizionare un prodotto innovativo."
};

function ConceptualMap({ mappingData }) {
  // Se non viene passato mappingData, usa i dummy data
  if (!mappingData) mappingData = dummyMappingData;
  
  const competitorPositions = mappingData.competitorPositions || [];
  const whiteSpaces = mappingData.whiteSpaces || [];
  const needStates = mappingData.needStates || {
    quadrante1: "",
    quadrante2: "",
    quadrante3: "",
    quadrante4: ""
  };

  const width = 600;
  const height = 600;
  const scaleX = (x) => (x / 10) * width;
  const scaleY = (y) => height - (y / 10) * height;

  const competitorElements = competitorPositions.map((comp, index) => {
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

  const whiteSpaceElements = whiteSpaces.map((ws, index) => {
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
    <Box sx={{ mt: 3, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h6" align="center" gutterBottom>
        {mappingData.xAxis} ↔ {mappingData.xAxisOpposite} / {mappingData.yAxis} ↔ {mappingData.yAxisOpposite}
      </Typography>
      {mappingData.suggestion && (
        <Typography variant="body1" align="center" sx={{ mb: 1, fontStyle: 'italic' }}>
          {mappingData.suggestion}
        </Typography>
      )}
      <svg width={width} height={height} style={{ border: '1px solid #ccc' }}>
        <line x1={width / 2} y1={0} x2={width / 2} y2={height} stroke="#666" strokeWidth="2" strokeDasharray="4,4" />
        <line x1={0} y1={height / 2} x2={width} y2={height / 2} stroke="#666" strokeWidth="2" strokeDasharray="4,4" />

        <text x={10} y={height / 2 - 10} fontSize="14" fill="#000">
          {mappingData.xAxis}
        </text>
        <text x={width - 10} y={height / 2 - 10} textAnchor="end" fontSize="14" fill="#000">
          {mappingData.xAxisOpposite}
        </text>
        <text x={width / 2 + 10} y={height - 10} fontSize="14" fill="#000">
          {mappingData.yAxis}
        </text>
        <text x={width / 2 + 10} y={20} fontSize="14" fill="#000">
          {mappingData.yAxisOpposite}
        </text>

        {competitorElements}
        {whiteSpaceElements}
      </svg>

      <Box sx={{ mt: 3, width: '100%' }}>
        <Typography variant="h6" align="center" gutterBottom>
          Need States per Quadrante
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                Quadrante 1
              </Typography>
              <Typography variant="body2">{needStates.quadrante1}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                Quadrante 2
              </Typography>
              <Typography variant="body2">{needStates.quadrante2}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                Quadrante 3
              </Typography>
              <Typography variant="body2">{needStates.quadrante3}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                Quadrante 4
              </Typography>
              <Typography variant="body2">{needStates.quadrante4}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default ConceptualMap;









