import React, { Component } from "react";
import Languages from "./skills/language-lists";
import Applications from "./skills/application-lists";
import OtherSkills from "./skills/other-skill-lists";
import Platforms from "./skills/platform-lists";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = { imageWidth: "" };

    this.setImageWidth = this.setImageWidth.bind(this);
  }

  getImages(imageWidth) {
    let images = document.getElementsByClassName("skills-image-img");

    for (let i = 0; i < images.length; i++) {
      this.images[i].childNodes[0].style.height = imageWidth;
    }
  }

  setImageWidth() {
    if (window.innerWidth < 425) {
      this.setState({ imageWidth: "1" });
    } else if (window.innerWidth < 775) {
    } else if (window.innerWidth < 1025) {
    } else {
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.setImageWidth);
  }

  render() {
    return (
      <div className="skills">
        <div className="skills-top">
          <Platforms />
        </div>
        <div className="skills-left">
          <Languages />
        </div>
        <div className="skills-mid">
          <Applications />
        </div>
        <div className="skills-right">
          <OtherSkills />
        </div>
      </div>
    );
  }
}

export default Skills;
