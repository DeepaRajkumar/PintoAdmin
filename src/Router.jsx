import * as React from "react";
import * as ReactDOM from "react-dom/client" 
import Dashboard from "../src/Component/Dashboard" 
import Order from "../src/Component/Orders"
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom"; 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
    },
    {
        path: "orders",
        element: <Order/>,
      },
  ]);
  export default router