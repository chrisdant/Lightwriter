import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../../styles/global.css'
import './NavButton.css';

export default class NavButton extends Component {
  constructor(props){
    super(props);
    // Bind members
    this.mouseMove = this.mouseMove.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.mouseClick = this.mouseClick.bind(this);
    this.state = {color: '', shadow: '', btnDown: false, hover: false};
  }

  static getDerivedStateFromProps(props, state) {
    // Determine current color, based on toggle prop and button pressed/hover state.
    let color;
    let shadow;
    if (props.btnToggle){
      shadow = 'noShadow';
      if (state.btnDown)
        color = 'color-accentDark2';
      else if (state.hover)
        color = 'color-accentDark1';
      else
        color = 'color-accentDark2';
    }
    else {
      shadow = 'noShadow';
      if (state.btnDown)
        color = 'color-accentLight1';
      else if (state.hover)
        color = 'color-accentLight2';
      else
        color = 'color-accent';
    }
    return {color: color, shadow: shadow, btnDown: state.btnDown, hover: state.hover};
  }

  mouseClick(){
    this.props.callback(this.props.text);
  }

  mouseMove(){
    this.setState(prev => 
      ({color: prev.color, shadow: prev.shadow, btnDown: prev.btnDown, hover: true}));
  }

  mouseLeave(){
    this.setState(prev => 
      ({color: prev.color, shadow: prev.shadow, btnDown: false, hover: false}));
  }

  mouseDown(){
    this.setState(prev => 
      ({color: prev.color, shadow: prev.shadow, btnDown: true, hover: prev.hover}));
  }

  mouseUp(){
    this.setState(prev => 
      ({color: prev.color, shadow: prev.shadow, btnDown: false, hover: prev.hover}));
  }

  render(){
    return (
        <section 
            className={'navBtn + ' + this.state.color + ' ' + this.state.shadow} 
            onMouseMove={this.mouseMove}
            onMouseLeave={this.mouseLeave}
            onMouseDown={this.mouseDown}
            onMouseUp={this.mouseUp} 
            onClick={this.mouseClick}>
          <object className="navBtnImage" type="image/svg+xml" 
            data={this.props.image} />
          <span className="navBtnText">{this.props.text}</span>
        </section>
    );
  }
}

NavButton.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  btnToggle: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired
};