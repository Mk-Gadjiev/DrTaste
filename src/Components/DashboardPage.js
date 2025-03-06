import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardContent, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import InnovationFunnel from './InnovationFunnel';
// Componente per visualizzare i progetti
function ProjectCard({ project, onSelect }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{project.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
        <Box sx={{ textAlign: 'right', mt: 2 }}>
          <Button variant="contained" onClick={() => onSelect(project)} sx={{ backgroundColor: "#3f51b5", color: "white" }}>
            Apri Progetto
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
// Componente per visualizzare una singola idea
function IdeaCard({ idea, onOpen }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{idea.name}</Typography>
        <Typography variant="body2">{idea.description}</Typography>
        <Typography variant="body2" color="text.secondary">
          Ranking: {idea.ranking} ⭐
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button variant="contained" onClick={() => onOpen(idea)} sx={{ backgroundColor: "#3f51b5", color: "white" }}>
            Visualizza
          </Button>
          <Button variant="contained" onClick={() => navigate('/concept-testing', { state: { concept: idea } })} sx={{ backgroundColor: "#3f51b5", color: "white" }}>
            Testa
          </Button>
          <Button variant="contained" onClick={() => navigate('/idea-module', { state: { idea } })} sx={{ backgroundColor: "#3f51b5", color: "white" }}>
            Modifica
          </Button>
          <Button variant="contained" onClick={() => navigate('/market-comparison', { state: { idea } })} sx={{ backgroundColor: "#3f51b5", color: "white" }}>
            Confronta con Competition
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
// Componente principale della dashboard
function DashboardPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    name: '', description: '', objective: '', target: '', insights: '', nextSteps: ''
  });
  const [projects, setProjects] = useState([
    { id: 1, name: 'Apple di Loacker', description: 'Progetto per snack innovativi a base di mela.', target: "Giovani sportivi", objective: "Creare uno snack sano e gustoso.", insights: "Trend sugli snack proteici in crescita.", nextSteps: "Test di mercato" },
    { id: 2, name: 'Chocolate Expansion', description: 'Espansione della linea di snack al cioccolato.', target: "Amanti del cioccolato", objective: "Ampliare la gamma con nuove varianti.", insights: "Richiesta di prodotti premium in aumento.", nextSteps: "Sviluppo nuovi gusti" },
  ]);
  const ideas = [
    { name: 'Idea 1', description: 'Snack con mela e proteine', ranking: 85, stageIndex: 1 },
    { name: 'Idea 2', description: 'Barretta senza zucchero', ranking: 72, stageIndex: 2 },
    { name: 'Idea 3', description: 'Cracker a base di mela', ranking: 90, stageIndex: 0 }
  ];
  // Salva un nuovo progetto
  const handleSaveProject = () => {
    if (newProject.name.trim() && newProject.description.trim()) {
      setProjects([...projects, { ...newProject, id: projects.length + 1 }]);
      setIsDialogOpen(false);
      setNewProject({ name: '', description: '', objective: '', target: '', insights: '', nextSteps: '' });
    } else {
      alert("Compila tutti i campi!");
    }
  };
  return (
    <Box sx={{ p: 4, maxWidth: 1000, mx: 'auto' }}>
      {selectedIdea ? (
        <>
          <Typography variant="h4" align="center" gutterBottom>
            {selectedIdea.name}
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            {selectedIdea.description}
          </Typography>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button variant="contained" onClick={() => setSelectedIdea(null)} sx={{ backgroundColor: "#3f51b5", color: "white" }}>
              Torna al Progetto
            </Button>
          </Box>
        </>
      ) : selectedProject ? (
        <>
          <Typography variant="h4" align="center" gutterBottom>
            {selectedProject.name}
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            {selectedProject.description}
          </Typography>
          <InnovationFunnel ideas={ideas} />
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>Ranking delle Idee</Typography>
            {ideas.map((idea, index) => (
              <IdeaCard key={index} idea={idea} onOpen={setSelectedIdea} />
            ))}
          </Box>
        </>
      ) : (
        <>
          <Typography variant="h4" align="center" gutterBottom>
            I tuoi Progetti
          </Typography>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
          ))}
          <Button variant="contained" onClick={() => setIsDialogOpen(true)} sx={{ backgroundColor: "#3f51b5", color: "white", mt: 3 }}>
            Crea un Nuovo Progetto
          </Button>
        </>
      )}
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <DialogTitle>Crea un Nuovo Progetto</DialogTitle>
        <DialogContent>
          {Object.keys(newProject).map((key) => (
            <TextField key={key} label={key} fullWidth multiline sx={{ mb: 2 }} value={newProject[key]} onChange={(e) => setNewProject({ ...newProject, [key]: e.target.value })} />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSaveProject}>Salva</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
export default DashboardPage;
























