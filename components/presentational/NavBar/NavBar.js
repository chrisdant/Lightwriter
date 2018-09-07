import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../../styles/global.css'
import './NavBar.css';
import NavButton from '../NavButton/NavButton';

export default class NavBar extends Component {
  constructor(props){
    super(props);
    this.btnClicked = this.btnClicked.bind(this);
    let btnsToggled = {'Explore': false, 'Edit': false, 'Present': false, 
      'Settings': false};
    // When created, the NavBar must figure out from the URL which NavButton
    // should have the active state. Afterwards, the NavBar maintains its
    // own state.
    switch(this.props.active) {
      case '/explore':
        btnsToggled['Explore'] = true;  
        break;
      case '/edit':
        btnsToggled['Edit'] = true;    
        break;
      case '/present':
        btnsToggled['Present'] = true;    
        break;
      case '/settings':
        btnsToggled['Settings'] = true;    
        break;
    }
    this.state = {btnsToggled: btnsToggled};
  }

  btnClicked(btn){
    // Update NavBar state.
    let btnsToggled = {'Explore': false, 'Edit': false, 'Present': false, 
      'Settings': false};
    btnsToggled[btn] = true;
    this.setState({btnsToggled: btnsToggled});
    console.log(this.state);// eslint-disable-line
    // Programatically trigger router navigation.
    const btnPath = btn.toLowerCase();
    this.props.navFunction('/' + btnPath);
  }

  render(){
    return (
      <section className='navBar color-accent'>
        <p id='logoText'>LOGO</p>
        <NavButton text='Explore' 
          image='../../resources/art/icons/earth.svg' 
          btnToggle={this.state.btnsToggled['Explore']} 
          callback={this.btnClicked} />
        <NavButton text='Edit'
          image='../../resources/art/icons/editor.svg' 
          btnToggle={this.state.btnsToggled['Edit']}
          callback={this.btnClicked} />
        <NavButton text='Present'
          image='../../resources/art/icons/presentation.svg' 
          btnToggle={this.state.btnsToggled['Present']}
          callback={this.btnClicked} />
        <NavButton text='Settings'
          image='../../resources/art/icons/settings.svg' 
          btnToggle={this.state.btnsToggled['Settings']}
          callback={this.btnClicked} />
      </section>
    );
  }
}

NavBar.propTypes = {
  active: PropTypes.string,
  navFunction: PropTypes.func.isRequired
}