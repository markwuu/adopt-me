const Pet = ({ name, animal, breed }) => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, [
      React.createElement("h1", {}, name),
      React.createElement("h2", {}, animal),
      React.createElement("h2", {}, breed),
    ])
  );
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
