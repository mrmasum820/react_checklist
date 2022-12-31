import React, { Component } from 'react';

//onClick
//onChange

class Event_Handler extends Component {
    constructor(props) {
        super(props)

        this.state = {
            changedValue: ''
        }
    }

    // handleClick = () => {
    //     console.log('button is clicked')
    // }

    handleOnChange = (e) => {
        this.setState({
            changedValue: e.target.value
        }, () => {
            console.log(this.state.changedValue)
        })
    }

    render() {
        return (
            <div>
                {/* <button onClick={this.handleClick}>click me</button> */}
                <input type="text" onChange={this.handleOnChange} />
                <p>{this.state.changedValue}</p>
            </div>
        );
    }
}

export default Event_Handler;