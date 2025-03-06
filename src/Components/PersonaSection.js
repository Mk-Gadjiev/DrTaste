import React from 'react';
import './PersonaSection.css';

// Definiamo il nostro componente PersonaSection
function PersonaSection() {
  return (
    <div className="persona-section">
      <div className="persona-container">
        {/* Avatar della persona */}
        <img src="persona-avatar.jpg" alt="Persona" className="persona-avatar" />
        
        {/* Informazioni della persona */}
        <div className="persona-info">
          <h3>Maria Rossi</h3>
          <p>#veganism #organic #coffee</p>
          <p>25-34 anni, Studente, Ama i prodotti innovativi</p>
        </div>
        
        {/* Citazione della persona */}
        <div className="persona-quote">
          <p>“Come consumatrice attenta al biologico, mi piace provare nuovi sapori naturali.”</p>
        </div>
      </div>

      {/* Catena DNA con elementi come icone dei social e del prodotto */}
      <div className="dna-chain">
        <div className="dna-node social-icon instagram">IG</div>
        <div className="dna-node social-icon facebook">FB</div>
        <div className="dna-node product-icon coffee">☕</div>
        <div className="dna-node marketing-icon emotions">🙂</div>
      </div>
    </div>
  );
}

export default PersonaSection;
