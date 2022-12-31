import React, { useState } from 'react'

export default function NewTodo(props) {
    const [todo, setTodo] = useState('');

    const handleInputChange = (e) => {
        setTodo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onTodo(todo);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='todo'>New Todo: </label>
            <input type="text" name="todo" onChange={handleInputChange} value={todo} id="todo" />
            <button>Add</button>
        </form>
    )
}
