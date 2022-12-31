import React, { useState } from 'react'

export default function Form_Single_State() {
    const [user, setUser] = useState({ name: '', email: '', password: '' })

    const { name, email, password } = user;

    // const handleNameChange = (e) => {
    //     setUser({ name: e.target.value, email, password });
    // }
    // const handleEmailChange = (e) => {
    //     setUser({ name, email: e.target.value, password });
    // }
    // const handlePasswordChange = (e) => {
    //     setUser({ name, email, password: e.target.value });
    // }

    const handleChange = (e) => {
        // const fieldName = e.target.name;
        // if (fieldName === 'name') {
        //     setUser({ name: e.target.value, email, password });
        // }
        // else if (fieldName === 'email') {
        //     setUser({ name, email: e.target.value, password });
        // }
        // else if (fieldName === 'password') {
        //     setUser({ name, email, password: e.target.value });
        // }

        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        console.log('form submitted');
        e.preventDefault();
        const userInfo = {
            name,
            email,
            password
        }
        console.log(userInfo);
    }

    return (
        <div>
            <h2>Registration</h2>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: <input type="text" name="name" onChange={handleChange} value={name} id="name" /></label>
                </div>
                <div>
                    <label htmlFor="email">Email: <input type="text" name="email" id="email" onChange={handleChange} value={email} /></label>
                </div>
                <div>
                    <label htmlFor="password">Password: <input type="password" name="password" id="password" onChange={handleChange} value={password} /></label>
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}
