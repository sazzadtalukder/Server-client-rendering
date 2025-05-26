
"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const ProductAddForm = () => {
    const router = useRouter()
    const handleSubmit =async (e) =>{
        e.preventDefault();
        const form = e.target ;
        const productName = form.productName.value;
        // 
        const payLoad = {
            product_name: productName
        }
        const res = await  fetch('http://localhost:3000/api/items',{
            method: "POST",
            body: JSON.stringify(payLoad),
            headers: {
                "Content-Type" : ":application/json"
            }
        })
        const result = await res.json()
        console.log( result)
form.reset();
router.push('/products')
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className=' inline-block text-center'> 
                <input 
                className='border p-3 m-4'
                placeholder='Product Name' type="text"  name='productName'/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default ProductAddForm;