import { getDoc, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-stars";
import {  db } from "../firebase/firebase";
import { ThreeCircles} from "react-loader-spinner";
import Reviews from "./Reviews";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    year: "",
    image: "",
    description: "",
    rating: 0,
    rated : 0,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _doc = doc(db, "movies", id);
      const _data = await getDoc(_doc);
      setData(_data.data());
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="flex flex-col md:flex-row  mt-4 items-center md:items-start p-4 justify-center ">
      {loading ? (
        <div className="h-96 flex w-full justify-center items-center"><ThreeCircles height={55} color="white" /></div>
      ) : (
        <>
          <img className="h-96 md:sticky md:top-24" src={data.image} alt="" />
          <div className="ml-0 md:ml-4 w-full md:w-1/2">
            <h1 className="text-3xl text-gray-400 font-bold ">
              {data.title} <span className="text-2xl">({data.year})</span>
            </h1>
            <ReactStars size={20} half={true} value={data.rating/data.rated} edit={true} />
            <p>{data.description}</p>
            <Reviews  id={id} prevRating={data.rating} userRated = {data.rated} />
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
