import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Divider,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CreateIcon from '@mui/icons-material/Create';
import AssessmentIcon from '@mui/icons-material/Assessment';
import InsightsIcon from '@mui/icons-material/Insights';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MapIcon from '@mui/icons-material/Map';
import EditIcon from '@mui/icons-material/Edit';

function SideMenu({ menuOpen, setMenuOpen, onSectionSelect, selectedSection, showResults }) {
  return (
    <Drawer anchor="left" open={menuOpen} onClose={() => setMenuOpen(false)}>
      <List sx={{ width: 250 }}>
        <ListSubheader>Panoramica</ListSubheader>
        <ListItem
          button
          sx={{ cursor: 'pointer' }}
          selected={selectedSection === 'Carica Idea'}
          onClick={() => { onSectionSelect('Carica Idea'); setMenuOpen(false); }}
        >
          <ListItemIcon>
            <CreateIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Carica Idea" />
        </ListItem>
        <ListItem
          button
          sx={{ cursor: 'pointer' }}
          selected={selectedSection === 'Idea Dashboard'}
          onClick={() => { if (showResults) { onSectionSelect('Idea Dashboard'); setMenuOpen(false); } }}
          disabled={!showResults}
        >
          <ListItemIcon>
            <DashboardIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Idea Dashboard" />
        </ListItem>
        <Divider />
        <ListSubheader>Approfondimenti</ListSubheader>
        <ListItem
          button
          sx={{ cursor: 'pointer' }}
          selected={selectedSection === 'Valutazione Sensoriale'}
          onClick={() => { if (showResults) { onSectionSelect('Valutazione Sensoriale'); setMenuOpen(false); } }}
          disabled={!showResults}
        >
          <ListItemIcon>
            <AssessmentIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Valutazione Sensoriale" />
        </ListItem>
        <ListItem
          button
          sx={{ cursor: 'pointer' }}
          selected={selectedSection === "Insights Generati dall'AI"}
          onClick={() => { if (showResults) { onSectionSelect("Insights Generati dall'AI"); setMenuOpen(false); } }}
          disabled={!showResults}
        >
          <ListItemIcon>
            <InsightsIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Insights di Mercato" />
        </ListItem>
        <ListItem
          button
          sx={{ cursor: 'pointer' }}
          selected={selectedSection === 'Neuromarketing Insights'}
          onClick={() => { if (showResults) { onSectionSelect('Neuromarketing Insights'); setMenuOpen(false); } }}
          disabled={!showResults}
        >
          <ListItemIcon>
            <PsychologyIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Neuromarketing Insights" />
        </ListItem>
        <ListItem
          button
          sx={{ cursor: 'pointer' }}
          selected={selectedSection === 'Conceptual Map'}
          onClick={() => { if (showResults) { onSectionSelect('Conceptual Map'); setMenuOpen(false); } }}
          disabled={!showResults}
        >
          <ListItemIcon>
            <MapIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Mappa Concettuale" />
        </ListItem>
        <ListItem
          button
          sx={{ cursor: 'pointer' }}
          selected={selectedSection === 'Modifica Concept'}
          onClick={() => { if (showResults) { onSectionSelect('Modifica Concept'); setMenuOpen(false); } }}
          disabled={!showResults}
        >
          <ListItemIcon>
            <EditIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Modifica Concept" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default SideMenu;










