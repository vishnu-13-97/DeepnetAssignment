import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuPage from "./components/MenuPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CreateMenu from "./components/CreateMenu";
import CreateMenuItem from "./components/CreateMenuItems";
import Home from "./components/Home";
import Reservation from "./components/Reservation";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1"> 
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu/:menuName" element={<MenuPage />} />
            <Route path="/createmenu" element={<CreateMenu />} />
            <Route path="/createmenuitems/:menuId" element={<CreateMenuItem />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
