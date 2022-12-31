import React, { useState } from 'react'

import './Faqs.css';

export default function Faq({ id, title, desc }) {
    const [toggle, setToggle] = useState(false);

    return (
        <article className='faq'>
            <div>
                <h4>{title}</h4>
                <button onClick={() => setToggle(!toggle)}>
                    {toggle ? '-' : '+'}
                </button>
            </div>
            {toggle && <p>{desc}</p>}
        </article>
    )
}
