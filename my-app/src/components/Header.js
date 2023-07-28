// import React from 'react';



// const Header = () => {
//   return (
//     <header style={headerColor}>
//       <h1>My Header</h1>
//     </header>
//   );
// };

// const Header = () => {
//   return (
//     <header style={headerStyles}>
//       <h1>My Header</h1>
//     </header>
//   );
// };

// const headerStyles = {
//   backgroundColor: '#333',
//   color: '#fff',
//   padding: '10px',
//   textAlign: 'center',
// };
export default function Header({headerColor}){

  return(
    <div>
      <div style ={{background:headerColor,height:100,width:'100%'}}>
      This Is MY Header

    </div>
    <div>
      
    </div>
    </div>
    
  )
}


