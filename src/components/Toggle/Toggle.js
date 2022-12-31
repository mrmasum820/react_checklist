import React, { useState } from 'react'

export default function Toggle() {
    const [toggle, setToggle] = useState(true);
    // alert(toggle);

    return (
        <div style={{ backgroundColor: 'green', padding: '10px' }}>
            {toggle && <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolores maiores culpa nisi saepe dignissimos possimus, temporibus natus consequuntur accusamus quo aperiam unde commodi quod, exercitationem ut pariatur architecto, labore nesciunt consectetur vel rerum!</p>}
            <div style={{ textAlign: 'center' }}>
                <button onClick={() => setToggle(!toggle)}>
                    {toggle ? 'hide' : 'show'}
                </button>
            </div>
        </div>
    )
}
