import React from 'react'

const MovieCard = ({ movieData }) => {
    const { Poster, Title, Year, imdbID } = movieData
    return (
        <li className='mt-20 w-[25%] h-[500px] shadow-2xl rounded-lg flex  justify-center flex-wrap items-center  relative'>
            <div className='w-[90%] flex justify-center overflow-hidden rounded-lg shadow-2xl top-2 mt-[-30%] '>
                <img src={Poster} alt={imdbID} className="w-full h-full object-cover rounded-lg shadow-blue-800 hover:shadow-green-800 hover:cursor-pointer" />
            </div>
            {/* Text Content */}
            <div className="w-full px-4 text-center mt-4">
                <h1 className="text-lg font-semibold">{Title} - {Year}</h1>
            </div>

            {/* Watch Now Button */}
            <div className="w-[90%] bg-black text-white h-12 text-center mt-3 rounded-lg flex justify-center items-center hover:cursor-grab">
                <button>Watch Now</button>
            </div>
        </li>
    )
}

export default MovieCard