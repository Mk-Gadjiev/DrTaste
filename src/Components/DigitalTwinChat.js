// DigitalTwinChat.js
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography
} from "@mui/material";

const DigitalTwinChat = ({ twin, open, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    if (open) {
      setMessages([
        {
          sender: twin?.name || twin?.gender || "Twin",
          text: "Ciao! Sono il tuo Digital Twin. Come posso aiutarti?",
        },
      ]);
      setInputMessage("");
    }
  }, [open, twin]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    const newMsg = { sender: "User", text: inputMessage };
    setMessages((prev) => [...prev, newMsg]);
    setInputMessage("");

    // Simula una risposta dopo un breve delay
    setTimeout(() => {
      const response = {
        sender: twin?.name || twin?.gender || "Twin",
        text: `Hai detto: "${newMsg.text}"`,
      };
      setMessages((prev) => [...prev, response]);
    }, 500);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <Box>
          💬 Chat con {twin?.name || twin?.gender || "Anonimo"}
          {(twin?.project || twin?.idea) && (
            <Typography variant="caption" color="textSecondary" display="block">
              {twin.project && `Progetto: ${twin.project}`}{" "}
              {twin.idea && `| Idea: ${twin.idea}`}
            </Typography>
          )}
        </Box>
      </DialogTitle>
      <DialogContent>
        <List>
          {messages.map((msg, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${msg.sender}: ${msg.text}`} />
            </ListItem>
          ))}
        </List>
        <TextField
          fullWidth
          label="Scrivi un messaggio..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          sx={{ mt: 2 }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined">
          Chiudi
        </Button>
        <Button onClick={handleSendMessage} variant="contained" color="primary">
          Invia
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DigitalTwinChat;







