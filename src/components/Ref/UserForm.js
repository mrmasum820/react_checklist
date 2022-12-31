import React, { Component, createRef } from 'react'

export default class UserForm extends Component {
    constructor(props) {
        super(props)
        //create ref in constructor
        this.nameRef = createRef();
        this.passwordRef = createRef();
        this.state = {}
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.nameRef.current);
        const name = this.nameRef.current.value;
        const password = this.passwordRef.current.value;
        console.log(name, password);
        // this.nameRef.current.style.backgroundColor = 'green';
        // this.passwordRef.current.style.color = 'red'
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">Username: </label>
                    <input type="text" id="name" ref={this.nameRef} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" ref={this.passwordRef} />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        )
    }
}
