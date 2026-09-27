import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Experience from "./pages/Experience";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";

function App() {

  return (
    <>
      <div className="min-h-screen w-full bg-slate-950 text-slate-100">
        <Navbar />
        <Hero />

        <main className="flex-1">
          {/* <Routes> */}
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/experience" element={<Experience />} /> */}
            {/* <Route path="/projects" element={<Projects />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          {/* </Routes> */}
        </main>

        {/* <Footer /> */}
      </div>
    </>
  )
}

export default App
