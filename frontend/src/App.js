import logo from './logo.svg';
import './App.css';
import { useState } from "react" 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Register from './component/Register';  
function App() {
  return (
    <div className="App">
      <Router>
        <Routes> 
          <Route exact path='/' element={< Register />}></Route>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
