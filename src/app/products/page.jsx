import { redirect } from 'next/navigation';
import React from 'react';

const Page =async () => {
    const res =  await fetch('http://localhost:3000/api/items',{
        cache: 'force-cache'
    })
    const data = await res.json();
    // if(data.length >3)
    // redirect('/')
    return (
        <div>
            <p>All Products</p>
            {
                data && data.map(d=><div key={d._id}>
                    <li>{d.product_name}</li>
                </div>)
            }
        </div>
    );
};

export default Page;