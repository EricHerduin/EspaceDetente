import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Homepage from "./pages/homepage";
import Wellfare from "./pages/wellfare";
import News from "./pages/news";
import Product from "./pages/product";
import Contact from "./pages/contact";
import ErrorPage from "./pages/error-page";

const routing = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Homepage />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/product/:id",
    element: <Product />,
    errorElement: <ErrorPage />,
  },
  {
    path: "product/:id/:modelid",
    element: <Product />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/bienetre",
    element: <Wellfare />,
  },
  // {
  //   path: "/news",
  //   element: <News />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/news/:id",
  //   element: <News />,
  //   errorElement: <ErrorPage />,
  // },
]);
export default routing;
