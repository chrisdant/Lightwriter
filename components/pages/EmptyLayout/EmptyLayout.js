import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import HomePage from '../HomePage/HomePage.js';

export default class EmptyLayout extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={HomePage} />
      </div>
    );
  }
}