import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/navbar";
import Footer from "./components/layouts/footer";




function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
    </Routes> 

    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;