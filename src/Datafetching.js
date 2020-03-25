import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching(){
    const[post, setPost] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => 
        {
        setPost(res.data)
        })
        .catch(err => console.log(err))
    })
return(
    <div>
        <h1>Data Fetch using fake rest api</h1>
        <ul>
        {post.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
    </div>
)
}
export default  DataFetching;