// Components/HomePage.js
import { Typography, Container } from '@mui/material';
import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import VerticalCarousel from './VerticalCarousel';
import Footer from './Footer';
import BenefitsCarousel from './BenefitsCarousel'; // Carosello dei vantaggi
import PersonaSection from './PersonaSection'; // Importa il nuovo componente PersonaSection

function HomePage() {
  return (
    <div>
      {/* Sezione Hero */}
      <HeroSection />

      {/* Carosello dei Vantaggi */}
      <Container sx={{ my: 5 }}>
        <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
          I Vantaggi di Dr. Taste
        </Typography>
        <BenefitsCarousel />
      </Container>

      {/* Sezione Persona (nuova) */}
      <Container sx={{ my: 5 }}>
        <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
          Il Profilo del Consumatore
        </Typography>
        <PersonaSection /> {/* Nuova sezione per il profilo del consumatore */}
      </Container>

      {/* Carosello esistente */}
      <Container sx={{ my: 5 }}>
        <VerticalCarousel />
      </Container>

      {/* Sezione delle Caratteristiche con sfondo celeste */}
      <Container sx={{ bgcolor: '#e3f2fd', py: 5, borderRadius: 2, mb: 8 }}>
        <FeaturesSection />
      </Container>

      {/* Footer con altezza ridotta */}
      <Footer sx={{ py: 3 }} />
    </div>
  );
}

export default HomePage;

