import React, { useState, useEffect } from 'react'
import * as Layout from '../components/Layout'
import * as config from '../config/Constent'

const BlogArchive = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts()
    }, []);

    const fetchPosts = () => {
        fetch(config.apiUrlPosts)
            .then((result) => {
                result.json().then((resp) => {
                    resp.forEach(async (p, index) => {
                        p.img = await getFeatureImage(179)
                        if (index === resp.length - 1) {
                            setPosts(resp);
                        }
                    })

                });
            });
    }

    const getFeatureImage = (id) => {
        return new Promise(resolve => {
            fetch(config.apiUrlImage + id)
                .then((result) => {
                    result.json().then((resp) => {
                        console.log(resp.guid.rendered)
                        resolve(resp.guid.rendered)
                    });
                });
        })
    }

    return (
        <>
            <Layout.Header />
            {
                posts.map((post) =>
                    <div className='blogCard' key={`post-${post.id}`}>
                        <div className='title'>{post.title.rendered}</div>
                        <div className='image'> <img src={post.img} /></div>
                        <div className='content' dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                    </div>
                )
            }
            <Layout.Footer />
        </>
    )
}


export default BlogArchive