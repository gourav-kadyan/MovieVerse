import AddMovie from "./Component/AddMovie";
import Cards from "./Component/Cards";
import Header from "./Component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Component/Navigation";
import Detail from "./Component/Detail";
import { createContext, useState } from "react";
import Login from "./Component/Login"
import Signup from "./Component/Signup"

const Appstate = createContext();

function App() {
  
  const [login, setLogin] = useState(false);
  const [ userName, setUserName] = useState("");

  return (
    <Appstate.Provider value={{login, setLogin, userName, setUserName}} >
    <div className="relative">
      
      <Router>
        <Header />
        <Routes> 
          <Route exact path="/" element={<Cards />} />
          <Route exact path="/addmovie" element={<AddMovie />} />
          <Route exact path="/detail/:id" element={<Detail />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
    </Appstate.Provider>
  );
}

export default App
export { Appstate };
