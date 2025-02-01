import React from "react";
import { useEffect } from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./assets/pages/Home";
import Faq from "./assets/pages/Faq";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
import Feature from "./assets/pages/Feature";
import ErrorPage from "./components/ErrorPage";
import SingleProduct from "./components/SingleProduct";
import ProductList from "./ProductList";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      delay: 0,
      easing: "ease",
    });
  });
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Feature />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
