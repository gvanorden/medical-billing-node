import React, { Component } from "react";
import Contact from "./contact";
import Navbar from "./navbar";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "75vw",
      height: "64vh"
    };

    this.setDimensions = this.setDimensions.bind(this);
  }

  setDimensions() {
  }

  componentDidMount() {
    this.setDimensions();

    window.addEventListener("resize", this.setDimensions);
  }

  render() {
    return (
      <div
        className="main"
        style={{
          width: this.state.width,
          height: this.state.height
        }}
      >
        <div className="top-main">
          <Contact />
        </div>
        <div className="bottom-main">
          <Navbar />
        </div>
      </div>
    );
  }
}

export default Main;
