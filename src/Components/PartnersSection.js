import React from 'react';
import './PersonaSection.css'; // Assicurati che il percorso sia corretto

function PersonaSection() {
    return (
        <div className="persona-section">
            {/* Icona del cervello con animazione */}
            <div className="brain-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100" height="100">
                    <circle cx="32" cy="32" r="30" fill="#ff9e80" />
                    {/* Altri dettagli dell'icona del cervello */}
                </svg>
            </div>

            {/* Altri elementi come l'avatar e le informazioni della persona */}
            <img src="avatar.jpg" alt="Avatar" className="persona-avatar" />
            <div className="persona-info">Maria Rossi</div>
            <p className="persona-quote">“Come consumatrice attenta al biologico, mi piace provare nuovi sapori naturali.”</p>

            {/* Catena del DNA */}
            <div className="dna-chain">
                <div className="dna-node social-icon instagram">IG</div>
                <div className="dna-node social-icon facebook">FB</div>
                <div className="dna-node product-icon coffee">☕</div>
                <div className="dna-node marketing-icon emotions">😊</div>
            </div>
        </div>
    );
}

export default PersonaSection;

