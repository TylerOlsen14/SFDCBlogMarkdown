import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom"
import './index.css';
import "typeface-raleway"
import Home from './pages/home';

ReactDOM.render(
  <Router>
    <div>
      <Router exact path="/" component={Home} />
    </div>
  </Router>, 
  document.getElementById('root')
);
