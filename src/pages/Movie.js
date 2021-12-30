import React, { useState, useEffect } from 'react'
import { Header, Footer } from '../components/Layout';

const Movie = () => {

    const [data, setData] = useState([])
    const [name, setName] = useState()

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=cbd222596aa2498db0e6d8a66cda2f4c")
            .then((result) => {
                result.json().then((resp) => {
                    setData(resp.results);
                });
            });
    }, []);

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
    }

    return (
        <>
            <Header />
            <form onSubmit={handleSubmit}>
                <label> Name: <input type="text" value={name} onChange={handleChange} /> </label>
                <input type="submit" value="Submit" />
            </form>


            <h1>
                Movie List
            </h1>
            <table style={{ textAlign: 'left' }}>
                <tbody>
                    <tr>
                        <th>Title</th>
                        <th>Release Date</th>
                        <th>Logo</th>
                        <th>Overview</th>
                    </tr>
                    {
                        data.map((item) =>
                            <tr>
                                <td>{item.title}</td>
                                <td>{item.release_date}</td>
                                <td><img style={{ width: 100 }} src={"https://www.themoviedb.org/t/p/w440_and_h660_face/" + item.backdrop_path} /></td>
                                <td>{item.overview}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <Footer />
        </>
    )
}



export default Movie
