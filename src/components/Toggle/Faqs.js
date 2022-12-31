import React, { useState } from 'react'

import { faqsData } from './data';
import Faq from './Faq';
import './Faqs.css';


export default function Faqs() {
    const [faqs, setFaqs] = useState(faqsData);
    // console.log(faqs);

    return (
        <main className='container'>
            <section className='faqs'>
                <h1 className='faq__title'>FAQs</h1>
                {
                    faqs.map((faq) => <Faq key={faq.id} {...faq} />)
                }
            </section>
        </main>
    )
}
