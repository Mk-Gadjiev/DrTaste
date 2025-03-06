// App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import HomePage from './Components/HomePage';
import DashboardPage from './Components/DashboardPage';
import Opportunities from './Components/Opportunities/Opportunities';
import IdeaModule from './Components/IdeaModule/IdeaModule';
import MarketComparison from './Components/MarketComparison/MarketComparison';
import ConceptTestingPage from './Components/ConceptTesting/ConceptTestingPage';
import SurveyResultsPage from './Components/ConceptTesting/SurveyResultsPage';
import PersonasPage from './Components/PersonasPage';
import Chatbot from './Components/Chatbot';

function App() {
  return (
    <div>
      <AppBar position="static" sx={{ bgcolor: 'primary.dark', py: 1 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
            Dr. Taste
          </Typography>
          <div>
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>
            <Button component={Link} to="/dashboard" color="inherit">
              Dashboard
            </Button>
            <Button component={Link} to="/opportunities" color="inherit">
              Opportunities
            </Button>
            <Button component={Link} to="/idea-module" color="inherit">
              Idea Module
            </Button>
            <Button component={Link} to="/market-comparison" color="inherit">
              Market Comparison
            </Button>
            <Button component={Link} to="/concept-testing" color="inherit">
              Concept Testing
            </Button>
            <Button component={Link} to="/personas" color="inherit">
              Personas
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/idea-module" element={<IdeaModule />} />
        <Route path="/market-comparison" element={<MarketComparison />} />
        <Route path="/concept-testing" element={<ConceptTestingPage />} />
        <Route path="/results" element={<SurveyResultsPage />} />
        <Route path="/personas" element={<PersonasPage />} />
      </Routes>
      <Chatbot />
    </div>
  );
}

export default App;




