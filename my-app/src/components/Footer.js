import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyles}>
      <h1>My Footer</h1>
      
      <p>© {new Date().getFullYear()} Your Company. All rights reserved to Bikram Rokaya</p>
    </footer>
  );
};

const footerStyles = {
  backgroundColor: 'blue',
  color: '#fff',
  padding: '8px',
  textAlign: 'center',
  position:'fixed',
  width: '100%',
  bottom:'0',
  
};

export default Footer;