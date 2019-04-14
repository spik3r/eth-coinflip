import React, { Component } from 'react';
import './coinflip.css';

// const CoinFlip = {
//     Coin: function getCoin(props) {
//         return <div>
//             <div id="coin">
//                 <div className="side-a"></div>
//                 <div className="side-b"></div>
//             </div>
//             <h1>Click on {props.color} coin to flip</h1>
//         </div>;
//     }
// };
//
// function BlueCoinFlip() {
//     return <CoinFlip.Coin color="blue" />;
// }
//
// export default BlueCoinFlip;

class CoinFlip extends Component {
    constructor(props) {
        super(props);
        this.state = {addClass: false}
    }
    toggle() {
        this.setState({addClass: !this.state.addClass});
    }
    render() {
        let boxClass = ["side-a"];
        if(this.state.addClass) {
            boxClass.push('side-b');
        }
        return(<div>
                         <div id="coin" className={boxClass.join(' ')} onClick={this.toggle.bind(this)}>
                             <div className="side-a"></div>
                             <div className="side-b"></div>
                         </div>
                         <h1>Click on coin to flip</h1>
                     </div>
        );
    }
}

export default CoinFlip