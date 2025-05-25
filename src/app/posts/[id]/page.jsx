import React from 'react';
const getSingle = async (post_id)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
    const data  =await  res.json();
    return data
}
export async function generateMetadata({ params }) {
  const id = (await params).id
 
  // fetch post information
  const singlePost = await getSingle(id)
 
  return {
    title: singlePost.title,
    description: singlePost.body,
  }
}

const PostDetails =async ({params}) => {
    const p = await params;

    const getData =await  getSingle(p.id)
    console.log(getData)
    return (
        <div>
            <p>This is data of {getData.title}</p>
        </div>
    );
};

export default PostDetails;