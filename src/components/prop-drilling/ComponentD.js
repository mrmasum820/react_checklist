import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const ComponentD = () => {
    // const { id, name } = user;
    const { user, text } = useContext(UserContext)
    return (
        <div>
            <h2>Component D</h2>
            <h3>{text}</h3>
            <p>{user.id}</p>
            <p>{user.name}</p>
        </div>
    )
}

export default ComponentD