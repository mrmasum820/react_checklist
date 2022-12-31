import React, { Component } from 'react';

class Demo extends Component {
    render() {
        // console.log(this.props);
        const { name, desc } = this.props;
        return (
            <div>
                <h2>{name}</h2>
                <p> {desc} </p>
            </div>
        )
    }
}


export default Demo;