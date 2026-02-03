import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { publicRoutes, privateRoutes, adminRoutes } from './routes/index';
import Navbar from "./components/layouts/navbar";
import Footer from "./components/layouts/footer";
import Banner from "./components/commons/Banner";

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  // List of routes where header/footer should be hidden
  const noHeaderFooterRoutes = ["/auth/login", "/auth/signup"];
  const hideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);
  
  return (
    <>
      {!hideHeaderFooter && <Banner />}
      {!hideHeaderFooter && <Navbar />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </>
  );
}


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {publicRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          {privateRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          {adminRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;