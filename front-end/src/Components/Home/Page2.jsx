import React, { useEffect, useState } from 'react'
import './Page2.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Page2 = () => {
    const [blogs, setBlogs] = useState()
    useEffect(() => {
        const fetch = async () => {
            try {
                await axios.get("http://localhost:1000/api/v1/getRecentblogs").then((res) => setBlogs(res.data.data));

            } catch (error) {
                alert("some error in fetch function")
            }
        };
        fetch();
    }, [])
    return (
        <div className='page container'>
            {blogs && blogs.map((item, i) => <div>
                <Link className='link-front-pg' to={`/blogsPage/${item._id}`}>
                    <h1>{item.title}</h1>
                </Link>
                <p>{item.desc.slice(0,400)} ....</p>
            </div>)}
        </div>
    )
}

export default Page2
