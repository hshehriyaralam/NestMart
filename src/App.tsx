import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/navbar";
import Footer from "./components/layouts/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact/indes";
import Blog from "./pages/blog";
import Banner from "./components/commons/Banner";

function App() {
  return (
    <>
    <BrowserRouter>
    <Banner />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
    </Routes> 
     <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;