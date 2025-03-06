import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Grid } from "@mui/material";
import { Radar, Bar, Bubble, Line } from "react-chartjs-2";

const Charts = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Dati per i grafici
  const radarData = {
    labels: ["Prezzo", "Qualità", "Innovazione", "Sostenibilità", "Social Media"],
    datasets: [
      {
        label: "Idea Corrente",
        data: [80, 90, 85, 70, 75],
        backgroundColor: "rgba(34, 202, 236, 0.5)",
        borderColor: "rgba(34, 202, 236, 1)",
        borderWidth: 1,
      },
      {
        label: "Competitor A",
        data: [70, 85, 80, 65, 80],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Competitor B",
        data: [75, 80, 78, 72, 77],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Competitor C",
        data: [65, 70, 75, 60, 70],
        backgroundColor: "rgba(153, 102, 255, 0.5)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: ["Prezzo", "Qualità", "Innovazione", "Sostenibilità", "Social Media"],
    datasets: [
      {
        label: "Idea Corrente",
        data: [80, 90, 85, 70, 75],
        backgroundColor: "rgba(54, 162, 235, 0.8)",
      },
      {
        label: "Competitor A",
        data: [70, 85, 80, 65, 80],
        backgroundColor: "rgba(255, 99, 132, 0.8)",
      },
      {
        label: "Competitor B",
        data: [75, 80, 78, 72, 77],
        backgroundColor: "rgba(75, 192, 192, 0.8)",
      },
      {
        label: "Competitor C",
        data: [65, 70, 75, 60, 70],
        backgroundColor: "rgba(153, 102, 255, 0.8)",
      },
    ],
  };

  const bubbleData = {
    datasets: [
      {
        label: "Idea Corrente",
        data: [{ x: 4.5, y: 80, r: 15 }],
        backgroundColor: "rgba(34, 202, 236, 0.8)",
      },
      {
        label: "Competitor A",
        data: [{ x: 5, y: 85, r: 10 }],
        backgroundColor: "rgba(255, 99, 132, 0.8)",
      },
      {
        label: "Competitor B",
        data: [{ x: 3.8, y: 75, r: 12 }],
        backgroundColor: "rgba(75, 192, 192, 0.8)",
      },
      {
        label: "Competitor C",
        data: [{ x: 4.2, y: 70, r: 18 }],
        backgroundColor: "rgba(153, 102, 255, 0.8)",
      },
    ],
  };

  const lineData = {
    labels: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu"],
    datasets: [
      {
        label: "Idea Corrente",
        data: [70, 75, 80, 85, 90, 95],
        fill: false,
        borderColor: "rgba(54, 162, 235, 1)",
        tension: 0.1,
      },
      {
        label: "Competitor A",
        data: [65, 70, 75, 80, 85, 87],
        fill: false,
        borderColor: "rgba(255, 99, 132, 1)",
        tension: 0.1,
      },
      {
        label: "Competitor B",
        data: [60, 65, 70, 75, 80, 82],
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
      {
        label: "Competitor C",
        data: [68, 72, 74, 76, 78, 80],
        fill: false,
        borderColor: "rgba(153, 102, 255, 1)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
        Dashboard Grafici
      </Typography>

      {/* Tabs per le sezioni */}
      <Tabs value={activeTab} onChange={handleTabChange} centered>
        <Tab label="Panoramica" />
        <Tab label="Benchmarking" />
        <Tab label="Posizionamento" />
        <Tab label="Andamento Storico" />
      </Tabs>

      {/* Contenuto delle schede */}
      <Box sx={{ mt: 4 }}>
        {activeTab === 0 && (
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Confronto Parametri</Typography>
              <Radar data={radarData} options={options} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Benchmarking</Typography>
              <Bar data={barData} options={options} />
            </Grid>
          </Grid>
        )}

        {activeTab === 1 && (
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Posizionamento Competitor
            </Typography>
            <Bubble data={bubbleData} options={options} />
          </Box>
        )}

        {activeTab === 2 && (
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Andamento Storico
            </Typography>
            <Line data={lineData} options={options} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Charts;













