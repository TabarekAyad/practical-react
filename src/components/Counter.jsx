import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
             count : 0
        };
    }
    
    handleIncrementClick = () => {
        this.setState({
            count: this.state.count +1
        })
    };
    

    render() {
        return (
            <div>
                <p>count: {this.state.count}</p>
                <button onClick = {this.handleIncrementClick}>increment</button>
            </div>
        )
    }
}

export default Counter;