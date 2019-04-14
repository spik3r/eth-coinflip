import React, { Component } from 'react';
import './coin.css'

class Coin extends Component {
    constructor(props) {
        super(props);
        this.state = {addClass: false}
    }
    toggle() {
        this.setState({addClass: !this.state.addClass});
    }
    render() {
        let boxClass = ["box"];
        if(this.state.addClass) {
            boxClass.push('green');
        }
        return(
            <div className={boxClass.join(' ')} onClick={this.toggle.bind(this)}>{this.state.addClass ? "Remove a class" : "Add a class (click the box)"}</div>
        );
    }
}

export default Coin;