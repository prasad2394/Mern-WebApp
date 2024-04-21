import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./pages/dashboard/Profile";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard/profile" element={<Profile />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;