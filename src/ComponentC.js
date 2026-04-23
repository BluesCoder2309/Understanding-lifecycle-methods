import React from "react";

class ComponentC extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "ComponentC",
    };
    console.log("ComponentC: constructor");
  }
  static getDerivedStateFromProps() {
    console.log("ComponentC: getDerivedStateFromProps");
    

    return null;
  }
  componentDidMount() {
    console.log("ComponentC: Component did mount");
    
    
  }
  render() {
    console.log("ComponentC: render");
    
    return <h3>{this.state.name}</h3>;
  }
}

export default ComponentC;
