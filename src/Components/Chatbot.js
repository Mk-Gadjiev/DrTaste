// src/Components/Chatbot.js
import React, { useState } from 'react';
import './Chatbot.css';
import axios from 'axios';
import robotIcon from '../assets/robot_icon.png';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [conversation, setConversation] = useState([]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSubmit = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setConversation([...conversation, userMessage]);

    try {
      const response = await axios.post('http://localhost:5001/chat', { message: input });
      const assistantMessage = { role: 'assistant', content: response.data.response };
      setConversation((prev) => [...prev, assistantMessage]);
    } catch (error) {
      setConversation((prev) => [...prev, { role: 'assistant', content: "Errore nella risposta dal server." }]);
    }

    setInput('');
  };

  return (
    <div className="chatbot-container">
      <div className={`chatbot-icon ${isOpen ? 'open' : ''}`} onClick={toggleChat}>
        <img src={robotIcon} alt="Dr. Taste Robot" className="robot-icon" />
      </div>
      {isOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <span>Dr. Taste - Chatbot di Supporto</span>
            <button className="close-btn" onClick={toggleChat}>×</button>
          </div>
          <div className="chatbot-body">
            {conversation.map((msg, index) => (
              <div key={index} className={`message ${msg.role}`}>
                {msg.role === 'user' ? 'Tu: ' : 'Dr. Taste: '}{msg.content}
              </div>
            ))}
          </div>
          <div className="chatbot-footer">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Scrivi la tua domanda..."
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            />
            <button onClick={handleSubmit}>Invia</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;










