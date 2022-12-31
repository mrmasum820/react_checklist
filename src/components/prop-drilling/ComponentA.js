import React, { useState } from 'react'
import { ComponentB } from './ComponentB'
import { UserContext } from './UserContext';

export const ComponentA = () => {
    const [user, setUser] = useState({ id: 1, name: 'MR Masum' });
    const [text, setText] = useState('I am from parent component text');

    return (
        <UserContext.Provider value={{ user, text }}>
            <ComponentB />
        </UserContext.Provider>
    )
}
