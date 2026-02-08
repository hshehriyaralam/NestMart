
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact/indes";
import Blog from "../pages/blog";
import ProductDetails from "@/pages/products/productDetails";
import BlogDetails from "@/pages/blog/blogDetails";
import Signup from "@/pages/auth/signup";
import Login from "@/pages/auth/login";
import Shop from "@/pages/shop/shop";
import TotalProducts from "@/pages/totalProducts";


// Route configuration interface
export interface AppRoute {
  path: string;
  element: React.ReactNode;
  showCategories?: boolean;  // Flag to show/hide categories sidebar
}

export const publicRoutes: AppRoute[] = [
  { path: "auth/login", element: <Login /> },
  { path: "auth/signup", element: <Signup /> },
  { path: "/", element: <Home />, showCategories: true },  // Show categories on Home
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/blog", element: <Blog /> },
  { path: "/shop", element: <Shop /> },
  { path: "/*", element: <TotalProducts />, showCategories: true }
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

