import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

const AppLayOut = () => {
  return (
    <div className="appLayout">
      <Header />
      <Body />
    </div>
  );
};

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<AppLayOut />);

