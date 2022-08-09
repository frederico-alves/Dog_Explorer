/*** FREDERICO ALVES @ SHAPE GAMES ***/
import Navbar from "./components/Navbar";
import Welcome from "./pages/Welcome";
import List from "./pages/List";
import Gallery from "./pages/Gallery";
import Favorites from "./pages/Favorites";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";


//Route component is used to render a component based on the path
function App() {
  return (
    <div className="App">

      {/* == Navbar == */}
      < Navbar />

      <Routes>
        {/* == Welcome == */}
        <Route path="/" element={<Welcome />} />
        {/* == List == */}
        <Route path="/list" element={<List />} />
        {/* == Gallery == */}
        <Route path="/gallery/:breedName" element={<Gallery />} />
        {/* == Favorites == */}
        <Route path="/favorites" element={<Favorites />} />
      </Routes>

      {/* == Footer == */}
      <Footer />
    </div>
  );
}

export default App;
/*** FREDERICO ALVES @ SHAPE GAMES ***/