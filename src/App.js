import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Match" animal="Dog" breed="Border Collie" />
      <Pet name="Xiaobai" animal="Dog" breed="Husky" />
      <Pet name="Chloe" animal="Dog" breed="Toy Poodle" />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
