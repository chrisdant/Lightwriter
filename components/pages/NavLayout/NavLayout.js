import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../../presentational/NavBar/NavBar.js';
import ExplorePage from '../ExplorePage/ExplorePage.js';
import EditPage from '../EditPage/EditPage.js';
import PresentPage from '../PresentPage/PresentPage.js';
import SettingsPage from '../SettingsPage/SettingsPage.js';

export default class NavLayout extends Component {
  render() {
    return (
      <div>
        <Navbar active={this.props.location.pathname}
          navFunction={this.props.history.push}/>
        <Route path='/explore' component={ExplorePage} />
        <Route path='/edit' component={EditPage} />
        <Route path='/present' component={PresentPage} />
        <Route path='/settings' component={SettingsPage} />
      </div>
    );
  }
}

NavLayout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
};