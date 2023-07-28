import React from 'react';
import Card from './card';

const CardContainer = () => {
  return (
    <div style={containerStyles}>
      <Card title="Card 1" content="This is the content for Card 1." />
      <Card title="Card 2" content="This is the content for Card 2." />
      <Card title="Card 3" content="This is the content for Card 3." />
    </div>
  );
};

const containerStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  backgroundColor: '#f2f2f2',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

export default CardContainer;
