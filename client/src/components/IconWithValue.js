import React from 'react';
import './styles/icon-with-value.css';

class IconWithValue extends React.Component {
    render() {
        if (!this.props.value) {
            return(null);
        }
        
        return(
            <div className="icon-with-value">
                <div className="value">
                    <b>{this.props.value}</b>
                </div>
                <div className="icon">
                    <i className={this.props.icon}></i>
                </div>
            </div>
        );
    }
};

export default IconWithValue;