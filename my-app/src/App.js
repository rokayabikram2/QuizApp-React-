// import React, { useEffect, useState } from 'react';
// import Header from './components/Header';
// import CardContainer from './components/container';
// import Footer from './components/Footer';
// import NepaliDate from "nepali-date-converter";
// import Speech from 'speak-tts';







// function App() {

//  const [text, setText] = useState('');

//   const handleInputChange = (e) => {
//     setText(e.target.value);
//   };
//   const convertToSpeech = () => {
//     const speech = new Speech();
//     speech
//       .init()
//       .then((data) => {
//         speech.speak({
//           text,
//         });
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }; 
//   const[increment,setIncrement]=useState(0);
//   const handClick=()=>{
//     setIncrement((prev)=>prev+1);

//   }  
//   const handClickDecrement=()=>{
//     setIncrement((prev)=>prev-1);

//   }

//   const[headerColor,setHeaderColor]=useState('yellow')
//   const[buttonColor,setButtonColor]=useState('red')
  
//   const [Today,setToday]=useState('Sunday')


//   const handleChange=(currentDay,color)=>{
//     setToday(currentDay);
//     setButtonColor(color);
//   }

//   const [date,setDate]=useState(new Date())
//   const [convertedDate,setConvertedDate]=useState('')

//   const handleDateConvert=()=>{
//     let engDate=new Date(date);
//     let date1=new
//     NepaliDate(new Date(engDate.getFullYear(),
//       (engDate.getMonth()),
//       engDate.getDate()))
//     setConvertedDate(date1); 


//   }

  

  
//   return (
//     <div>

//     <BrowserRouter>
//       <Routes>
//         <Route path="/" exact element={<Home/>}/>
//         <Route  exact path="/about"  element={<About/>}/>
//         <Route  exact path="*"  element={<div>Not Found</div>}/>
//         <Route  exact path="/contact"  element={<Contact/>}/>
        


      
//     </Routes>
//     </BrowserRouter>









    

//       <div>
//       <input type="text" value={text} onChange={handleInputChange} />
//       <button onClick={convertToSpeech}>Convert to Speech</button>
//       </div>

//       <div>
//         <input type ='date' vlaue={date}
//         onChange={(e)=>
//         setDate(e.target.value)}/>
//         <button onClick={handleDateConvert}>Convert</button>
//         {convertedDate.toLocaleString()}
//       </div>
     
      
//       <div>
//       <Header headerColor={headerColor}/>
//       <button onClick={()=>setHeaderColor('green')}>change color</button>
      


//       {increment}
//       <button onClick ={handClick}>
//         Click Me to Increment
//       </button>
    
//       <button onClick ={handClickDecrement}>
//         Click Me to decrement
//       </button>
//       </div>
//       <div>
//         {Today}
//         <button style={{background:buttonColor}} onClick={()=>handleChange('Sunday',"blue")}>Sunday</button>
//         <button style={{background:buttonColor}} onClick={()=>handleChange('Monday',"Yellow")}>Monday</button>
//         <button style={{background:buttonColor}} onClick={()=>handleChange('Tuesday',"Green")}>Tuesday</button>
//         <button style={{background:buttonColor}} onClick={()=>handleChange('Wednesday',"Yellow")}>Wednesday</button>
//         <button style={{background:buttonColor}} onClick={()=>handleChange('Thursday',"blue")}>Thursday</button>
//         <button style={{background:buttonColor}} onClick={()=>handleChange('Friday',"green")}>Friday</button>
//         <button style={{background:buttonColor}} onClick={()=>handleChange('Sunday',"yellow")}>Saturday</button>
//       </div>

    
//       <CardContainer />
//       <Footer />

//     </div>
//   );
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";


function App() {


  



  return (
        <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
       
        


      
    </Routes>
    </BrowserRouter>



  );
}



export default App;
