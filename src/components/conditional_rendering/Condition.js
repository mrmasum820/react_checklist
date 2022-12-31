import React, { Component } from 'react';
import HomePage from './HomePage';
import SignUpPage from './SignUpPage';

//if else
//element variable
//ternary operator
//short circuit

class Condition extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        const { isLoggedIn } = this.state;

        // let element;
        // if (isLoggedIn) {
        //     element = <HomePage />
        // } else {
        //     element = <SignUpPage />
        // }

        return (
            <div>
                {isLoggedIn ? <HomePage /> : <SignUpPage />}

                {/* {isLoggedIn && <HomePage />} */}
            </div>
        )

    }
}

export default Condition;