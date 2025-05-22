"use client"
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Meal = () => {
    const [search,setSearch]= useState('')
    const router = useRouter();
    const pathname = usePathname();
    useEffect(()=>{
        const searchQuery = {search}
        const urlQueryParam = new URLSearchParams(searchQuery)
        const url = `${pathname}?${urlQueryParam}`
        
        router.push(url)
        console.log(url)
    },[search])
    console.log(search)
    return (
        <div>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search' type="text" className='border p-2 m-3 text-black' />
        </div>
    );
};

export default Meal;