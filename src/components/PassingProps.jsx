import React, { Component } from 'react'

class PassingProps extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h1>{this.props.num}</h1>
                <h1>{this.props.myObj.b}</h1>
                <h1>{JSON.stringify(this.props.myObj)}</h1>
                <h1>{this.props.myArr[2]}</h1>
                <h1>{JSON.stringify(this.props.myArr)}</h1>
                <h1>{this.props.myFunc1(1, 100)}</h1>
                <h1>{this.props.myFunc2(2, 100)}</h1>
                <h1>{this.props.myFunc3(3, 100)}</h1>

            </div>
        )
    }
}

export default PassingProps;