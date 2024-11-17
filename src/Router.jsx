import * as React from "react";
import * as ReactDOM from "react-dom/client" 
import Dashboard from "../src/Component/Dashboard" 
import Order from "../src/Component/Orders" 
import PhoneOrder from "../src/Component/Orders/PhoneOrder/PhoneOrder" 
import RestaurantList from "./Component/Orders/PhoneOrder/RestaurantList"; 
import SpecificRestaurant from "./Component/Orders/PhoneOrder/SpecificRestraurant";
import ManageScreen from "./Component/Menu" 
import AddCategory from "./Component/Menu/ManageSecreen/Categoty/ShowCategory"; 
import ShowFilter from "./Component/Menu/ManageSecreen/QuickFilter/ShowFilter" 
import AddCategoryForm  from "./Component/Menu/ManageSecreen/Categoty/AddCategoryForm"; 
import AddFilterForm from "./Component/Menu/ManageSecreen/QuickFilter/AddFilterForm";
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
        path: "/orders/manage-orders",
        element: <Order/>,
      },
      {
        path: "/orders/phone-orders",
        element: <PhoneOrder/>,
      }, 
      {
        path: "/orders/phone-orders/restaurant-list",
        element: <RestaurantList/>,
      }, 
      {
        path: "/orders/phone-orders/specific-restaurant",
        element: <SpecificRestaurant/>,
      }, 
      {
        path: "/menu/home-screen",
        element: <ManageScreen/>,
      },
      {
        path: "/menu/home-screen/manage-screen",
        element: <AddCategory/>,
      },
      {
        path: "/menu/home-screen/quick-filter",
        element: <ShowFilter/>,
      },
      {
        path: "/menu/home-screen/add-categoty-form",
        element: <AddCategoryForm/>,
      },
      {
        path: "/menu/home-screen/add-filter-form",
        element: <AddFilterForm/>,
      },
  ]);
  export default router