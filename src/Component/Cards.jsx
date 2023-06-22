import React, { useState } from "react";
import ReactStars from "react-stars";

const Cards = () => {
  const [data, setData] = useState([
    {
      name: "Avengers Endgame",
      year: 2019,
      rating: 4.7,
      img: "https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg",
    },
    {
      name: "Avengers Endgame",
      year: 2019,
      rating: 0.7,
      img: "https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg",
    },
    {
      name: "Avengers Endgame",
      year: 2019,
      rating: 1,
      img: "https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg",
    },
    {
      name: "Avengers Endgame",
      year: 2019,
      rating: 5,
      img: "https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg",
    },
    {
      name: "Avengers Endgame",
      year: 2019,
      rating: 4,
      img: "https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg",
    },
    {
      name: "Avengers Endgame",
      year: 2019,
      rating: 4.5,
      img: "https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg",
    },
    {
      name: "Avengers Endgame",
      year: 2019,
      rating: 3,
      img: "https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg",
    },
  ]);

  return (
    <div className="flex flex-wrap justify-between p-3 mt-2">
      {data.map((e, i) => {
        return (
          <div
            key={i}
            className="card shadow-lg p-2 cursor-pointer hover:translate-y-3 font-bold mt-6 transition-all duration-500"
          >
            <img className="h-72" src={e.img} alt="movie poster" />
            <h1>
              <span className="text-gray-500">Name : </span> {e.name}
            </h1>
            <h1 className="flex items-center">
              <span className="text-gray-500 mr-1">Rating : </span> 
              <ReactStars
                size={20}
                half={true}
                value={e.rating}
                edit={false}
              />
            </h1>
            <h1>
              <span className="text-gray-500">Year : </span> {e.year}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
