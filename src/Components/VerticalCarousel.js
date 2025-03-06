// VerticalCarousel.js
import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';

const items = ["Elemento 1", "Elemento 2", "Elemento 3"];
const intervalTime = 3000;

function VerticalCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Typography
        key={currentIndex}
        variant="h5"
        sx={{
          opacity: 0,
          animation: 'fadein 1s forwards',
        }}
      >
        {items[currentIndex]}
      </Typography>
      <style>
        {`
          @keyframes fadein {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </Box>
  );
}

export default VerticalCarousel;

