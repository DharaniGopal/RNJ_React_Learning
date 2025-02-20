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

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "h1"),
    React.createElement("h2", {}, "h2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "h1"),
    React.createElement("h2", {}, "h2"),
  ]),
]);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
