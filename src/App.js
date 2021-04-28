import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Match",
      animal: "Dog",
      breed: "Border collie",
    }),
    React.createElement(Pet, {
      name: "Xiaobai",
      animal: "Dog",
      breed: "Husky",
    }),
    React.createElement(Pet, {
      name: "Chloe",
      animal: "Dog",
      breed: "Toy Poodle",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
