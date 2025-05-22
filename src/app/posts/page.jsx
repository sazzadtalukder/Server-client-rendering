import Link from 'next/link';
import React from 'react';
export const getPosts = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
}
const PostsPage =async () => {
    const posts = await getPosts();
    return (
        <div className='space-y-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
            {/* <p>{JSON.stringify(posts)}</p> */}
            {
                posts.map((singlePost)=>
                   
                        <div key={singlePost.id} className='border p-3 bg-slate-100' >
                            <p>{singlePost.title}</p>
                            <Link href={`/posts/${singlePost?.id}`}><button className='btn'>Details</button></Link>
                            {/* <p>{singlePost.body}</p> */}
                        </div>
                   
                )
            }
        </div>
    );
};

export default PostsPage;