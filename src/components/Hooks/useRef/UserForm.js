import React, { useRef } from 'react'

export const UserForm = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        console.log({ username, password });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Username: </label>
                <input type="text" id="name" ref={usernameRef} />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" ref={passwordRef} />
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}
