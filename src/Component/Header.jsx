import React, { useContext } from "react";
import { Appstate } from "../App"
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button } from "@mui/material";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";

const Header = () => {
  const useAppstate = useContext(Appstate);
  return (
    <div className=" sticky top-0 z-10 header text-3xl font-bold p-3 border-b-2 border-gray-500 flex justify-between items-center ">
      <Link to='/'>
        <div>
          <span className="text-red-500">Movie</span>
          <span>Verse</span>
        </div>
      </Link>
      {useAppstate.login ?
        <Link to='/addmovie'>
          <h1 className="text-lg cursor-pointer flex items-center ">
            <Button>
              <AddCircleIcon className="mr-1" sx={{ color: red[500] }} />
              <span className="text-white">Add New</span>
            </Button>
          </h1>
        </Link>
        :
        <Link to='/login'>
          <h1 className="text-lg bg-green-500 cursor-pointer flex items-center ">
            <Button>
              <span className="text-white font-medium capitalize ">Login</span>
            </Button>
          </h1>
        </Link>
      }
    </div>
  );
};

export default Header;
