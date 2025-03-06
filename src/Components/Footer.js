// Footer.js
import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.dark', color: 'white', py: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Dr. Taste
            </Typography>
            <Typography variant="body2">
              Scopri insight e analisi approfondite.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Navigazione
            </Typography>
            {/* Link interni utilizzano il componente Link di react-router-dom */}
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}>
              <Typography variant="body2">Dashboard</Typography>
            </Link>
            <Link to="/analytics" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}>
              <Typography variant="body2">Analytics</Typography>
            </Link>
            <Link to="/concept-testing" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}>
              <Typography variant="body2">Concept Testing</Typography>
            </Link>
            <Link to="/personas" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}>
              <Typography variant="body2">Personas</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Seguici
            </Typography>
            {/* Link esterni utilizzano il componente MuiLink */}
            <MuiLink href="https://www.facebook.com" color="inherit" variant="body2" display="block">
              Facebook
            </MuiLink>
            <MuiLink href="https://www.twitter.com" color="inherit" variant="body2" display="block">
              Twitter
            </MuiLink>
            <MuiLink href="https://www.linkedin.com" color="inherit" variant="body2" display="block">
              LinkedIn
            </MuiLink>
          </Grid>
        </Grid>
        <Box textAlign="center" mt={5}>
          <Typography variant="body2">© 2024 Dr. Taste. Tutti i diritti riservati.</Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
