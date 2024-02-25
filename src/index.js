import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from "./pages/Home/Home"
import Characters from './pages/Characters/Characters';
import Contact from './pages/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/characters' element={<Characters />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </Router>


    
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
