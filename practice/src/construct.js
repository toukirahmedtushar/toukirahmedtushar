import React from "react";
class Car3 extends React.Component {
    constructor() {
      super();
      this.state = {color: "red"};
    }
    render() {
      return <h2>I am a {this.state.color} Car!</h2>;
    }
  }
export default Car3;