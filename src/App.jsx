import AddMovie from "./Component/AddMovie";
import Cards from "./Component/Cards";
import Header from "./Component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Component/Navigation";
import Detail from "./Component/Detail";

function App() {
  return (
    <div className="relative">
      
      <Router>
        <Header />
        <Routes> 
          <Route exact path="/" element={<Cards />} />
          <Route exact path="/addmovie" element={<AddMovie />} />
          <Route exact path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
