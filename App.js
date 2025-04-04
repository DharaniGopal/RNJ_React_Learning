import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import LoginPage from "./src/components/LoginPage";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import User from "./src/components/User";
import UserClass from "./src/components/UserClass";
import Error from "./src/components/Error";
import RestaurentMenu from "./src/components/RestaurentMenu";
// import Grocery from "./src/components/Grocery";
import userContext from "./src/utils/userContext";
import { Provider } from "react-redux";
import appStore from "./src/Redux/appStore";
import Cart from "./src/components/Cart";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

const AppLayOut = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Dharani",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="appLayout">
          <Header />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
  );
};

const Grocery = lazy(() => import("./src/components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    children: [
      // {
      //   path: "/",
      //   element: <LoginPage />,
      // },
      {
        // path: "/Body",
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
        path: "/user",
        element: <User name={"Dharani"} />,
      },
      {
        path: "/userClass",
        element: <UserClass name={"Dharani"} />,
      },
      {
        path: "/resInfo/:resId", // ( /: ) means dynamic path.
        element: <RestaurentMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />, // This a component for error handling. ( errorElement: ) is a keyword to use this.
  },
]);

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<RouterProvider router={appRouter} />);
// Root.render(<AppLayOut />);
