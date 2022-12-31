import React from 'react'
import { ComponentC } from './ComponentC'

export const ComponentB = ({ user }) => {
    return (
        <div>
            <ComponentC user={user} />
        </div>
    )
}
