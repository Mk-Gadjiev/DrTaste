import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Grid,
  Avatar,
  Box,
  Divider,
  Chip
} from "@mui/material";
import {
  School,
  Work,
  Public,
  MonetizationOn,
  DirectionsRun,
  Restaurant,
  Star
} from "@mui/icons-material";

const DigitalTwinDetail = ({ twin, open, onClose }) => {
  if (!twin) return null;

  const getTypeColor = (type) => {
    if (type === "sintetico") return "primary";
    if (type === "replicante") return "warning";
    return "default";
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        Dettagli Digital Twin{" "}
        {twin.type && (
          <Chip
            label={twin.type === "sintetico" ? "Sintetico (LLM)" : "Replicante"}
            color={getTypeColor(twin.type)}
            size="small"
            sx={{ ml: 1 }}
          />
        )}
      </DialogTitle>
      <DialogContent dividers>
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar sx={{ width: 64, height: 64, mr: 2 }}>
            {twin.name ? twin.name.charAt(0) : "A"}
          </Avatar>
          <Box>
            <Typography variant="h6">{twin.name}</Typography>
            <Typography variant="subtitle1">
              {twin.gender} | {twin.ageRange}
            </Typography>
            {(twin.project || twin.idea) && (
              <Typography variant="caption" color="textSecondary">
                {twin.project && `Progetto: ${twin.project}`}{" "}
                {twin.idea && `| Idea: ${twin.idea}`}
              </Typography>
            )}
          </Box>
        </Box>
        <Divider />
        <Grid container spacing={2} mt={2}>
          <Grid item xs={4}>
            <Box display="flex" alignItems="center">
              <School fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">Educazione:</Typography>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body2">{twin.education || "N/A"}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" alignItems="center">
              <Work fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">Professione:</Typography>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body2">{twin.profession || "N/A"}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" alignItems="center">
              <Public fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">Paese:</Typography>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body2">{twin.country || "N/A"}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" alignItems="center">
              <MonetizationOn fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">Reddito:</Typography>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body2">{twin.income || "N/A"}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" alignItems="center">
              <DirectionsRun fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">Stile di Vita:</Typography>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body2">{twin.lifestyle || "N/A"}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" alignItems="center">
              <Restaurant fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">Dieta:</Typography>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body2">{twin.diet || "N/A"}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" alignItems="center">
              <Star fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">Innovazione:</Typography>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body2">
              {twin.innovation !== undefined ? `${twin.innovation}/100` : "N/A"}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2">Interessi:</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body2">
              {twin.interests && twin.interests.length > 0
                ? twin.interests.join(", ")
                : "Nessuno"}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2">Snack Salutari:</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body2">{twin.snack_healthy || "N/A"}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2">Snack Dolci:</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body2">{twin.snack_sweet || "N/A"}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2">Tema:</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body2">{twin.theme || "N/A"}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2">Idea:</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body2">{twin.idea || "N/A"}</Typography>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined">
          Chiudi
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DigitalTwinDetail;



