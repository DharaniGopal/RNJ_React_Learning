import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurentMenu from "./src/components/RestaurentMenu";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

const AppLayOut = () => {
  return (
    <div className="appLayout">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resInfo/:resId", // ( /: ) means dynamic path.
        element: <RestaurentMenu />,
      },
    ],
    errorElement: <Error />, // This a component for error handling. ( errorElement: ) is a keyword to use this.
  },
]);

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<RouterProvider router={appRouter} />);
// Root.render(<AppLayOut />);
