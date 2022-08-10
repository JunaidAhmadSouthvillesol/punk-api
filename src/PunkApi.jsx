import React, { useState, useEffect } from 'react';
import './Punk.css';
const PunkApi = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function allPages() {
            for (let x = 1; x <= 13; x++) {
                await fetch(`https://api.punkapi.com/v2/beers?page=${x}`)
                    .then((response) => response.json())
                    .then((data) => {
                        setPosts((prev) => [...prev, ...data])
                    })
                    .catch((err) => {
                        console.log(err.message);
                    });
            }
        } allPages()
    }, []);

    return (
        <>
            <div className="posts-container">
                <table className='main-table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th >NAME</th>
                            <th >Tagline</th>
                            <th >First Brewed</th>
                            <th >Description</th>
                            <th >Abv</th>
                            <th >Yeast</th>
                            <th >Image</th>
                        </tr>
                    </thead>
                </table>
                {posts.map((post) => {
                    return (
                        <>
                            <table key={post.id} className="inner-table">
                                <tbody>
                                    <tr>
                                        <td>{post.id}</td>
                                        <td>{post.name}</td>
                                        <td>{post.tagline}</td>
                                        <td>{post.first_brewed}</td>
                                        <td>{post.description}</td>
                                        <td>{post.abv}</td>
                                        <td>{post.ingredients.yeast}</td>
                                        <td><img src={post.image_url} alt="bottle" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </>
                    );
                })}
            </div>
        </>
    );
};
export default PunkApi;