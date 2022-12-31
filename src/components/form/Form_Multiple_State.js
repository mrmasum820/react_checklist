import React, { useState } from 'react'

const Form = () => {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name, email, password);
        const userInfo = {
            name: name,
            email: email,
            password: password
        }
        console.log(userInfo);
    }

    return (
        <div>
            <h2>Registration Form</h2>
            <form action="" onSubmit={handleSubmit}>

                <div className='form-group'>
                    <label htmlFor="name">Name: <input type="text" name="name" id="name" onChange={handleName} value={name} required /></label>
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email: <input type="email" name="email" id="email" onChange={handleEmail} value={email} required /></label>
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password: <input type="text" name="password" id="password" onChange={handlePassword} value={password} /></label>
                </div>
                <div className='form-group'>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default Form;
