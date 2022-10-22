import {React,useState} from 'react'
import './App.css';
import Landingpage from './pages/Landingpage';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Routes , Route} from 'react-router-dom'
import Preview from './pages/Preview';
import BookTicket from './pages/BookTicket';


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/preview/:movieTitle' element={<Preview/>}/>
      <Route path='/bookticket/:movieTitle' element={<BookTicket/>}/>
    </Routes>
    </>
  );
}

export default App;
