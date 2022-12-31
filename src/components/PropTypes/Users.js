import React, { useState } from 'react'
import { User } from './User'

export const Users = () => {
    const [userName, setUserName] = useState('Mahbubur Rahman');
    const [userId, setUserId] = useState('101');
    const [user, setUser] = useState({ name: 'MR Masum', id: "101" })

    return (
        <div>
            <User user={user} />
        </div>
    )
}
