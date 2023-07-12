import React, { useContext, useEffect, useState } from "react";
import ReactStars from "react-stars";
import { reviewsRef, db } from "../firebase/firebase";
import {
  addDoc,
  doc,
  updateDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { TailSpin, ThreeDots } from "react-loader-spinner";
import swal from "sweetalert";
import { Appstate } from "../App";
import { useNavigate } from "react-router-dom";

const Reviews = ({ id, prevRating, userRated }) => {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [field, setField] = useState("");
  const [data, setData] = useState([]);
  const useAppstate = useContext(Appstate);
  const navigate = useNavigate();
  const [newAdded, setNewAdded] = useState(0);

  const sendReview = async () => {
    setLoading(true);
    try {
      if (rating != 0) {
        if (useAppstate.login) {
          await addDoc(reviewsRef, {
            movieid: id,
            name: useAppstate.userName,
            rating: rating,
            thought: field,
            timestamp: new Date().getTime(),
          });

          const ref = doc(db, "movies", id);
          await updateDoc(ref, {
            rating: prevRating + rating,
            rated: userRated + 1,
          });

          setRating(0);
          setField("");
          setNewAdded(newAdded + 1);
          swal({
            title: "Review Sent",
            icon: "success",
            buttons: false,
            timer: 3000,
          });
        } else {
          navigate("/login");
        }
      } else {
        swal({
          title: "Please give rating",
          icon: "warning",
          buttons: false,
          timer: 3000,
        });
      }
    } catch (error) {
      swal({
        title: error.message,
        icon: "error",
        buttons: false,
        timer: 3000,
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    async function getData() {
      setReviewsLoading(true);
      setData([]);
      let quer = query(reviewsRef, where("movieid", "==", id));
      const querySnapshot = await getDocs(quer);

      querySnapshot.forEach((doc) => {
        setData((prev) => [...prev, doc.data()]);
      });

      setReviewsLoading(false);
    }
    getData();
  }, [newAdded]);

  return (
    <div className="mt-4 border-t-2 border-gray-700 w-full">
      <ReactStars
        size={30}
        half={true}
        onChange={(e) => {
          setRating(e);
        }}
      />
      <input
        type="text"
        value={field}
        onChange={(e) => {
          setField(e.target.value);
        }}
        placeholder="Share Yours Thoughts..."
        className="w-full p-3 outline-none header"
      />
      <button
        onClick={sendReview}
        className="bg-green-700 flex justify-center w-full p-2 mt-1"
      >
        {loading ? <TailSpin height={15} color="white" /> : "Share"}
      </button>
      {reviewsLoading ? (
        <div className="mt-6 flex justify-center">
          <ThreeDots height={20} color="white" />{" "}
        </div>
      ) : (
        <div>
          {data.map((e, i) => {
            return (
              <div
                className="bg-gray-800 bg-opacity-75 p-2 mt-2 w-full border-b border-gray-500"
                key={i}
              >
                <div className="flex items-center">
                  <p className="text-blue-400">{e.name}</p>
                  <p className="ml-4 text-xs">
                    {new Date(e.timestamp).toLocaleString()}
                  </p>
                </div>
                <ReactStars
                  size={15}
                  half={true}
                  value={e.rating}
                  edit={false}
                />
                <p>{e.thought}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Reviews;
