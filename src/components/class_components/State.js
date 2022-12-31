import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    buttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '7px 20px',
        fontSize: '25px',
        border: 'none',
        margin: '5px 10px'
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleDecrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <h1>Count: {count}</h1>
                <button style={this.buttonStyle} onClick={this.handleIncrement}>+</button>
                <button style={this.buttonStyle} onClick={this.handleDecrement} disabled={count === 0 ? true : false}>-</button>
            </div>
        )
    }
}
