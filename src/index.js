import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import "typeface-raleway"
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Post from './pages/post'
import NotFound from './pages/notfound'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route path="/post/:id" render={props => <Post {...props} /> } />
    </div>
  </Router>, 
  document.getElementById('root')
);
