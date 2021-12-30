import axios from 'axios';
import parse from 'html-react-parser';
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import * as Layout from '../components/Layout';
import * as Const from '../config/Constent';



const BlogSinglePage = () => {

    const [post, setPost] = useState();
    useEffect(() => {
        fetch("http://localhost/test/08/wp-json/wp/v2/posts/147")
            .then((result) => {
                setPost(result);
            });
    }, []);

    console.log(post);

    return (
        <>
            <Layout.Header />
            <div>
                {post.id}
            </div>
            <Layout.Footer />
        </>
    )
}

export default BlogSinglePage
