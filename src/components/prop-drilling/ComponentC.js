import React from 'react'
import ComponentD from './ComponentD'

export const ComponentC = ({ user }) => {
    return (
        <div>
            <ComponentD user={user} />
        </div>
    )
}
