import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './routes/NavBar';
import Home from './routes/Home';
import Shop from './routes/Shop';
import Cart from './routes/Cart';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav></Nav>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
