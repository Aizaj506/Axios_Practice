import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard';

const Movie = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    const API = "http://www.omdbapi.com/?s=avengers&apikey=522f43f8";

    const getMovieData = async () => {
        try {
            const response = await axios.get(API);
            console.log(response.data.Search)
            response.data.Search ? setData(response.data.Search) : setError("No Movie Found");
        } catch (error) {
            console.error(error)
            setError("Failed to fetch Movies")
        }
    }

    useEffect(() => {
        getMovieData();
    },[])
  return (
    <>
        <h1 className='font-bold text-center mt-10 text-5xl underline '>Movies Collection</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <ul className='mt-20 flex gap-10 flex-wrap justify-center'>
            {
                data.map((movie) => (
                    <MovieCard key={movie.imdbID} movieData={movie} /> 
                ))
            }
        </ul>
    </>
  )
}

export default Movie