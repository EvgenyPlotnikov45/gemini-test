import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return (
            <button type='button' tabIndex='0' className='button__button' onClick={this.onClick}>
                {this.props.children}
            </button>
        );
    }

    onClick() {
        if (this.props.onClick) this.props.onClick();
    }
}

export default Button;
