import React, { useEffect, useState } from 'react'

export const Styling = () => {
    const [name, setName] = useState('');
    const [validInput, setValidInput] = useState(false);

    const handleChange = (e) => {
        setName(e.target.value);
        // console.log(name);
    }

    useEffect(() => {
        if (name.length < 2) {
            setValidInput(false)
        } else {
            setValidInput(true)
        }
    }, [name])

    return (
        <div>
            <input type="text" value={name} onChange={handleChange} style={{
                backgroundColor: validInput ? 'green' : 'red'
            }} />
        </div>
    )
}
