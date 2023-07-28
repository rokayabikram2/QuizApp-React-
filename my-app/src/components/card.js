import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div style={cardStyles}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

const cardStyles = {
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '60px',
  margin: '40px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  background: 'grey',

};

export default Card;