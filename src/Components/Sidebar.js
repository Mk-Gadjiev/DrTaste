import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faChartLine, faVial, faUser, faLightbulb } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <div
      style={{
        backgroundColor: "#333",
        color: "white",
        padding: "20px",
        width: "220px", // Fissa larghezza per evitare overflow
        height: "100vh", // Altezza completa del viewport
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box", // Imposta il box model corretto
        overflowX: "hidden", // Evita scroll laterale
      }}
    >
      <div>
        {/* Header della sidebar */}
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#FFA726" }}>
          Dr. Taste
        </h2>
        <p style={{ fontSize: "0.9rem", color: "gray" }}>
          Scopri insight e analisi approfondite.
        </p>
      </div>

      {/* Menu di navigazione */}
      <nav style={{ marginTop: "20px" }}>
        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
          <li style={{ marginBottom: "15px" }}>
            <Link
              to="/"
              style={{
                color: "#FFA726",
                fontWeight: "bold",
                fontSize: "1.1rem",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon icon={faChartPie} style={{ marginRight: "8px" }} />
              Dashboard
            </Link>
          </li>

          <li style={{ marginBottom: "15px" }}>
            <Link
              to="/analytics"
              style={{
                color: "#FFA726",
                fontWeight: "bold",
                fontSize: "1.1rem",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon icon={faChartLine} style={{ marginRight: "8px" }} />
              Analytics
            </Link>
          </li>

          <li style={{ marginBottom: "15px" }}>
            <Link
              to="/idea-module"
              style={{
                color: "#FFA726",
                fontWeight: "bold",
                fontSize: "1.1rem",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon icon={faLightbulb} style={{ marginRight: "8px" }} />
              Idea Module
            </Link>
          </li>

          <li style={{ marginBottom: "15px" }}>
            <Link
              to="/concept-testing"
              style={{
                color: "#FFA726",
                fontWeight: "bold",
                fontSize: "1.1rem",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon icon={faVial} style={{ marginRight: "8px" }} />
              Concept Testing
            </Link>
          </li>

          <li style={{ marginBottom: "15px" }}>
            <Link
              to="/personas"
              style={{
                color: "#FFA726",
                fontWeight: "bold",
                fontSize: "1.1rem",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon icon={faUser} style={{ marginRight: "8px" }} />
              Personas
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;




