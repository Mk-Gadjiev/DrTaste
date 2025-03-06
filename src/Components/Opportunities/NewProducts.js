// src/Components/Opportunities/NewProducts.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const NewProducts = ({ innovativeProducts, startups, productComparison }) => {
  return (
    <Box>
      <Typography variant="subtitle1">Prodotti Innovativi</Typography>
      <Box sx={{ border: '1px solid #ddd', padding: 2 }}>
        {innovativeProducts.map((product, index) => (
          <Box key={index} sx={{ mb: 1 }}>
            <Typography variant="body1" fontWeight="bold">
              {product.name}
            </Typography>
            <Typography variant="body2">{product.description}</Typography>
          </Box>
        ))}
      </Box>

      <Typography variant="subtitle1" sx={{ mt: 2 }}>Startup Emergenti</Typography>
      <Box sx={{ border: '1px solid #ddd', padding: 2 }}>
        {startups.map((startup, index) => (
          <Box key={index} sx={{ mb: 1 }}>
            <Typography variant="body1" fontWeight="bold">
              {startup.name}
            </Typography>
            <Typography variant="body2">
              Location: {startup.location} | Focus: {startup.focus}
            </Typography>
          </Box>
        ))}
      </Box>

      <Typography variant="subtitle1" sx={{ mt: 2 }}>Confronto Prodotti</Typography>
      <Box sx={{ border: '1px solid #ddd', padding: 2 }}>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              {productComparison.headers.map((header, index) => (
                <th key={index} style={{ textAlign: 'left', padding: '8px' }}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {productComparison.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} style={{ padding: '8px' }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

export default NewProducts;

