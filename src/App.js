import NavBar from './navbar';
import Home from './home';
import Create from './create_blog';
import Read from './read_blog';

import {BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'

function App() {
  return (
    
    < div className='App'>
      <NavBar/>
      <div className="content">
       
       
          <Routes>
          <Route path="/" element = { <Home/>} />  
          <Route path="/create" element = { <Create/>} /> 
          <Route path="/read" element = { <Read/>} /> 
          </Routes>
         
         
           </div>
      </div>
  );
      
}

export default App;
