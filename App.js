import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading1", xyz: "abc" },
  "Hello World from React!"
);

{
  /* <div id="parent">
  <div id="child1">
    <h1>
      I'm h1 tag
    </h1>
    <h2>
      I'm h2 tag
    </h2>
  </div>  
    <div id="child2">
    <h1>
      I'm h1 tag
    </h1>
    <h2>
      I'm h2 tag
    </h2>
  </div>  
</div> */
}

const parent = React.createElement("h1", { id: "parent" }, ["Gokul is Here"]);

const jsxHeading = <h1>Heading using jsx</h1>;

console.log("parent=", parent);

console.log("jsxHeading=", jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
