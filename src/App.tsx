import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home Page</h1>,
    errorElement: <h1>Oops! An error occurred.</h1>,
    children:[
      {index:true, element:<h2>Welcome to the Home Page</h2>},
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;