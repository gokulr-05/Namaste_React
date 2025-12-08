import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const jsxHeading = <h1 className="heading">Heading using jsx</h1>;

// React Component
const Title = () => (
  <div>
    <h1 className="heading">Title</h1>
  </div>
);

const a = 10;
const b = 20;

// React Component
const HeadingComponent = () => {
  return (
    <div>
      {jsxHeading}
      <h1>{a + b}</h1>
      <h1>Namaste React</h1>

      {Title()}
      <Title />
      <Title></Title>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
