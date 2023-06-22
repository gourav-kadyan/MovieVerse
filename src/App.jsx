import AddMovie from "./Component/AddMovie";
import Cards from "./Component/Cards";
import Header from "./Component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Component/Navigation";

function App() {
  return (
    <>
      
      <Router>
        <Header />
        <Routes> 
          <Route exact path="/" element={<Cards />} />
          <Route exact path="/addmovie" element={<AddMovie />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
