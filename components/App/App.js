import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import NavLayout from '../pages/NavLayout/NavLayout.js';
import EmptyLayout from '../pages/EmptyLayout/EmptyLayout.js';

export default class App extends Component {
  render(){
    return (
      <div>
        <Switch>
          <Route exact path ='/' component={EmptyLayout} />
          <Route component={NavLayout} />
          {/*<Route path='*' component={NotFound} /> -- TODO: implement this*/}
        </Switch>
      </div>
    );
  }
}