import React, { Component } from 'react'

//mounting -> constructor - render - componentDidMount
//updating -> state/props - render - shouldComponentUpdate(if return) - compnentDidUpdate
//unmounting - componentWillUnmount

export default class LifeCycle extends Component {
    constructor(props) {
        super(props)
        console.log('constructor');
        this.state = {
            count: 0
        }
    }
    //mounting phrase
    componentDidMount() {
        console.log('componentDidMount');
    }

    //updating phrase
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true;  //if false the component will not update
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    //unmounting phrase
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }


    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log('rendering')
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        )
    }
}
