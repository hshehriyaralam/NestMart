
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact/indes";
import Blog from "../pages/blog";
import ProductDetails from "@/pages/products/productDetails";
import BlogDetails from "@/pages/blog/blogDetails";
import Dashboard from "@/pages/admin/dashboard";
import Signup from "@/pages/auth/signup";
import Login from "@/pages/auth/login";


// Route configuration interface
export interface AppRoute {
  path: string;
  element: React.ReactNode;
}

export const publicRoutes: AppRoute[] = [
  { path: "auth/login", element: <Login /> },
  { path: "auth/signup", element: <Signup /> },
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/blog", element: <Blog /> }
]

// Protected routes (require authentication)
export const privateRoutes: AppRoute[] = [
  {
    path: "/products/:slug",
    element: <ProductDetails />,
  },
  {
    path: "/blog/:id",
    element: <BlogDetails />
  }
 
  
];
// admin routes
export const adminRoutes: AppRoute[] = [
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
  },
  
];
