import React, { useState } from 'react'

const Cards = () => {

    const [ data, setData] = useState([
        {
            name : "Avengers Endgame",
            year : 2019,
            rating : 4.7,
            img : "https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg"
        },
        {
            name : "Avengers Endgame",
            year : 2019,
            rating : 4.7,
            img : "https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg"
        },
        {
            name : "Avengers Endgame",
            year : 2019,
            rating : 4.7,
            img : "https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg"
        },
        {
            name : "Avengers Endgame",
            year : 2019,
            rating : 4.7,
            img : "https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg"
        },
        {
            name : "Avengers Endgame",
            year : 2019,
            rating : 4.7,
            img : "https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg"
        },
        {
            name : "Avengers Endgame",
            year : 2019,
            rating : 4.7,
            img : "https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg"
        },
        {
            name : "Avengers Endgame",
            year : 2019,
            rating : 4.7,
            img : "https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg"
        }
    ])

  return (
    <div className='flex flex-wrap justify-between p-3 mt-2'>
    
    { data.map((e,i) => {
        return (
        <div key={i} className='card shadow-lg p-2 cursor-pointer hover:translate-y-2 font-bold mt-3'>
        <img className='h-72' src="https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg" alt="movie poster" />
        <h1><span className='text-gray-500'>Name : </span> Avenger Endgame</h1>
        <h1><span className='text-gray-500'>Rating : </span> 5</h1>
        <h1><span className='text-gray-500'>Year : </span> 2020</h1>
        </div>
        );
    })}

    </div>
  )
}

export default Cards