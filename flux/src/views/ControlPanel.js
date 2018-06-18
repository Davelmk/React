import React, { Component } from 'react';
import Counter from './Counter.js';
import Summary from './Summary.js';

const style = {
    margin: '20px',
    justifyContent:'center',
    alignItems:'center',
};

class ControlPanel extends Component {

    render() {
        return (
            <div style={style}>
                <hr/>
                <Counter caption="First" />
                <Counter caption="Second" />
                <Counter caption="Third" />
                <hr/>
                <Summary />
            </div>
        );
    }
}

export default ControlPanel;

