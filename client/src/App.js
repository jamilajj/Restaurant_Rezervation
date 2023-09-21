

import 'bootstrap/dist/css/bootstrap.min.css';
import Rezerv from "./pages/Rezerv"
import Home from "./pages/Home/Home";
import Navbar from "./layout/Header/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SliderComp from './components/Slider';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './layout/Footer/footer';



function App() {
  return (

    <Router>
      <Navbar />
      <SliderComp />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Rezerv" element={<Rezerv />} />
      </Routes>
      <Footer />

    </Router>




  );
}

export default App;
