import React from 'react'

export default function Child(props) {
    const data = 'I am from child component';
    props.onChildData(data);

    return (
        <div>
            <p>i am child component</p>
            <p>{props.data}</p>
        </div>
    )
}
