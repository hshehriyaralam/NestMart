import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {publicRoutes , privateRoutes , adminRoutes } from './routes/index'
import Navbar from "./components/layouts/navbar";
import Banner from "./components/commons/Banner";
import Footer from "./components/layouts/footer";

function App() {
  return (
    <>
    <Router>
    <Banner />
    <Navbar />
      <Routes>
        {
          publicRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))
        }

        {
          privateRoutes.map((route)=>(
            <Route key={route.path} path={route.path} element={route.element} />
          ))
        }

        {
          adminRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))
        }
        
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App;