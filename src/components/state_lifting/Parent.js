import React from 'react';

import Child from './Child';

export default function Parent() {
    const data = 'I am from parent component';

    const handleChildData = (childData) => {
        console.log('Apps: ' + childData);
    }

    return (
        <div>
            <h2>I am parent component</h2>
            <Child data={data} onChildData={handleChildData} />
        </div>
    )
}
