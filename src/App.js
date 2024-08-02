


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Academics from "./components/Academics/Academics";
import Admissions from "./components/Admission/Admission";
import Faculty from "./components/Faculty/Faculty";
import Students from "./components/Students/Students";
import Gallery from "./components/Gallery/Gallery";
import ContactUs from "./components/ContactUs/ContactUs";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/students" element={<Students />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
