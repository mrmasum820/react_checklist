import React, { useEffect, useState } from 'react'

export default function UseEffectExample() {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //calls with every render
        console.log('useEffect');
    }, [count])

    return (
        <div>
            {console.log('rendering')}
            <h1>Count: {count}</h1>
            <button onClick={() => { setCount(count + 1) }}>+</button>
            <button onClick={() => { setLoading(!loading) }}>isLoading</button>
        </div>
    )
}
