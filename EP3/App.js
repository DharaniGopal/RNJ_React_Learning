import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "/image/logo.jpeg";
import User from "/image/user-icon.png";

/* This the shape using html for understanding to execute below code.
<div id="parent">
  <div id="child1">
    <h1>Hi h1</h1>
    <h2>Hi h2</h2>
  </div>
  <div id="child2">
    <h1>Hi h1</h1>
    <h2>Hi h2</h2>
  </div>
</div>
*/

//--------------React------------

// const heading = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Hi h1"),
//     React.createElement("h2", {}, "Hi h2"),
//   ]),
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Hi h1"),
//     React.createElement("h2", {}, "Hi h2"),
//   ]),
// ]);

// console.log(heading);

//--------------JSX------------

// const heading = <h1 className="heading">"This is by react Jsx"</h1>;

// const heading1 = (
//   <div id="heading">
//     <h1>This is react</h1>
//   </div>
// );

// const HeadingComponent = () => <h1>This is functional component</h1>;

// const HeadingComponent1 = () => {
//   return (
//     <>
//       {heading1}
//       {heading}
//       <HeadingComponent></HeadingComponent>
//       {HeadingComponent}
//       <HeadingComponent />;<h1>This is functional component1</h1>;
//     </>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(heading);
// root.render(<HeadingComponent1 />);

const headingreact = React.createElement(
  "div",
  { class: "test" },
  ("h1", {}, ("h2", {}, ("h3", {}, "test")))
);

const headingjsx = (
  <div className="test">
    <h1>
      <h2>
        <h3>test</h3>
      </h2>
    </h1>
  </div>
);

const Headingcomponentjsx = () => {
  return (
    <div className="test">
      <h1 id="test1">
        <h2>
          <h3>This is Headingcomponentjsx</h3>
        </h2>
      </h1>
    </div>
  );
};

const Headingcomponentjsx1 = () => {
  return (
    <div className="test">
      <Headingcomponentjsx />
      <Headingcomponentjsx></Headingcomponentjsx>
      {Headingcomponentjsx}
      <h1 id="test1">This is Headingcomponentjsx1</h1>
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" className="logo-image" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="user-icon">
        <img src={User} alt="User" className="user-image" />
      </div>
    </header>
  );
};

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<Header />);

