// ChartCard.js
import React from 'react';
import { Card, CardHeader, CardContent, Box, Typography } from '@mui/material';
import ChartComponent from './ChartComponent';

const ChartCard = ({ title, type, data, description }) => {
  return (
    <Card variant="outlined" sx={{ margin: 2 }}>
      {/* Header della Card con il titolo */}
      <CardHeader 
        title={title}
        titleTypographyProps={{ align: 'center', variant: 'subtitle1' }}
        sx={{ padding: '8px' }}
      />
      {/* Area grafica */}
      <CardContent sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: 250,
          padding: '16px'
        }}>
        {type && data ? (
          <ChartComponent type={type} data={data} />
        ) : (
          <Box sx={{ width: '100%', height: 250 }}></Box>
        )}
      </CardContent>
      {/* Descrizione */}
      <CardContent>
        <Typography variant="body2" align="center">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ChartCard;


