import React from 'react';
import './styles/icon-with-value.css';

class IconWithValue extends React.Component {
    constructor(){
        super();

        this.state = {
            icon: String,
            value: String
        }
    }

    render() {
        return(
            <div className="icon-with-value">
                <div className="value">
                    <b>{this.props.value}</b>
                </div>
                <div className="icon">
                    <i class={this.props.icon}></i>
                </div>
            </div>
        );
    }
};

export default IconWithValue;