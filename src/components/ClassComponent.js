import React, { Component } from "react";

export class ClassComponent extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("ClassComponent componentDidMount() called");
  }
  render() {
    console.log(" ClassComponent render() called");
    return <div>ClassComponent</div>;
  }
}

export default ClassComponent;
