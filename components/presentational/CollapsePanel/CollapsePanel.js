import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../../styles/global.css'
import './CollapsePanel.css';

export default class NavBar extends Component {
  constructor(props){
    super(props);
    this.toggleClicked = this.toggleClicked.bind(this);
    this.state = {storedWidth: props.defaultWidth};
  }

  toggleClicked(){

  }

  render(){
    let toggleStyle;
    if (this.props.type === 'left')
      toggleStyle = 'leftToggle';
    else if (this.props.type === 'right')
      toggleStyle = 'rightToggle';

    return (
      <section className='collapsePanel'>
        <div className={'toggle ' + toggleStyle}>

        </div>
        <div className='container'>

        </div>
      </section>
    );
  }
}

NavBar.propTypes = {
  type: PropTypes.string.isRequired,
  defaultWidth: PropTypes.number.isRequired
};