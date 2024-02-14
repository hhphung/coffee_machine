
import 'bootstrap/dist/css/bootstrap.min.css';


import  Navbar from './Navbar.js';
import Home from './home_page/home.js'
import Menu from './Menu'
import Bean_2_Cup from './bean-2-cup-page/bean-2-cup.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

function App(){
  return (
    <Router> 
      <div className='App'>
        <Navbar/>
        <div className='content'> 
          <Routes> 
            <Route exact path= '/' Component={Home} /> 
            <Route exact path= '/bean-2-cup' Component={Bean_2_Cup} /> 
            
          </Routes>
        </div>
        <Menu/>
      </div>
      </Router>
  );
}

export default App;
