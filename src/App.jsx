import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";


// ----------- Router Setup -----------
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />, 
    children: [
      { index: true, element: <Home /> }, 
     
    ],
  },
]);

// ----------- App Entry -----------
function App() {
  return <RouterProvider router={router} />;
}

export default App;