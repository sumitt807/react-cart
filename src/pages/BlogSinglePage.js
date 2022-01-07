import axios from 'axios';
import parse from 'html-react-parser';
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import * as Layout from '../components/Layout'
import * as config from '../config/Constent'




const BlogSinglePage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts()
    }, []);

    const fetchPosts = () => {
        fetch(config.apiUrlPosts + useParams.slug)
            .then((result) => {
                result.json().then((resp) => {
                    resp.forEach(async (p, index) => {
                        p.img = 'https://picsum.photos/200/300';
                        if (p.featured_media !== 0)
                            p.img = await getFeatureImage(p.featured_media)
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
            <div>
                sfdsfdsf
            </div>
            <Layout.Footer />
        </>
    )
}

export default BlogSinglePage
