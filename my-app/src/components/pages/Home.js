import React from 'react'
import {  Link } from "react-router-dom";
import Navbar from './Navbar';
import PlayQuiz from '../Quiz/PlayQuiz';
import News from '../News/News';
import FormPractice from '../Form/FormPractice';


function Home() {
  return (
    <div>
      {/* <PlayQuiz/> */}
      {/* <News/> */}
      <FormPractice/>
      

      
    </div>
  )
}

export default Home;
