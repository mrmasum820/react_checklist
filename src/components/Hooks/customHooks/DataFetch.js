import React from 'react';

import useFetch from './useFetch';

export default function DataFetch() {
    const { data, isLoading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");

    const loadingMessage = <p>Data is loading</p>
    const errorMessage = <p>{error}</p>

    const todosElement = data && data.map((todo) => {
        return (
            <p key={todo.id}>{todo.id}: {todo.title}</p>
        );
    })

    return (
        <div>
            <h2>Todos</h2>
            {todosElement}
            {isLoading && loadingMessage}
            {error && errorMessage}
        </div>
    )
}
