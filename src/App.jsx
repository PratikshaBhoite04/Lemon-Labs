import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./shared/Navbar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";

import ScrollToTop from "./components/ScrollToTop";
import Footer from "./shared/Footer";
import Loader from "./components/Loader";

function App() {

  const [loading, setLoading] = useState(true);

  return (
    <>

      {/* LOADER */}
      {loading && (
        <Loader onFinish={() => setLoading(false)} />
      )}

      {/* WEBSITE */}
      {!loading && (
        <BrowserRouter>

          <ScrollToTop />

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project-details" element={<ProjectDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />

        </BrowserRouter>
      )}

    </>
  );
}

export default App;