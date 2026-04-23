import React from "react";
// import ComponentB from "./ComponentB.js";
// import ComponentC from "./ComponentC.js";

class ComponentA extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Component A",
      data: [],
    };
    console.log("Component A: constructor");
  }

  static getDerivedStateFromProps() {
    console.log("Component A: getDerivedStateFromProps");

    return null;
  }

  // Fetch URL : https://jsonplaceholder.typicode.com/users
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }));

    console.log("Component Mounted");
    // console.log(this.state.data.length);
  }

  render() {
    console.log("Component A: render");

    return (
      <>
        <h1>{this.state.name}</h1>
        <ul>
          {this.state.data.map((d) => {
            return (
              <>
                <li>{d.username}</li>
                <li>{d.address.city}</li>
              </>
            );
          })}
        </ul>
      </>
    );
  }
}

export default ComponentA;
