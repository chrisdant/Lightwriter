import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {BrowserRouter as Router} from 'react-router-dom';

import 'normalize.css';
import App from './components/App/App.js'

// Tell webpack to load favicon.ico. Used only during dev
// to keep browser from giving 404 error.
require('./favicon.ico'); 

render (
  <AppContainer>
    <Router>
      <App />
    </Router>    
  </AppContainer>,
  document.getElementById('app')
);