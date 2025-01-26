import React from 'react';
import Home from './Home.jsx';
import { BrowserRouter } from 'react-router-dom';
import "./PortfolioCSS/Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App overflow-hidden">
     <BrowserRouter>
      <Home />
      </BrowserRouter> 
    </div>
  );
}

export default App;
