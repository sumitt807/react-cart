import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/movie">Movie</Link>
            <Link to="/blogs">Blog</Link>
        </div>
    )
}

const Footer = () => {
    return (
        <>
            <div>
                @ Copywrite
            </div>
        </>
    )
}


export { Header, Footer };