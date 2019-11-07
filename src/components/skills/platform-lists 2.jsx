import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import windows from "../../images/os-logos/windows.png";
import server from "../../images/os-logos/windows-server.png";
import linux from "../../images/os-logos/linux.png";
import mac from "../../images/os-logos/mac.png";
import netapp from "../../images/os-logos/netapp.png";

class Platforms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      platforms: [
        {
          id: 2,
          img: server,
          text: "Windows Server",
          class: "skills-text red"
        },
        { id: 1, img: windows, text: "Windows", class: "skills-text red" },
        { id: 3, img: netapp, text: "NetApp", class: "skills-text" },
        { id: 4, img: linux, text: "Linux", class: "skills-text" },
        { id: 5, img: mac, text: "Mac", class: "skills-text" }
      ]
    };
  }

  render() {
    return (
      <div className="skills-container">
        <p className="platforms-title">PLATFORMS</p>
        <div className="platforms-list-container">
          {this.state.platforms.map(skill => (
            <ListGroup key={skill.id} className="platforms-list">
              <ListGroup.Item className="skills-list-item">
                <img
                  className="skills-image-img"
                  src={skill.img}
                  alt={skill.text}
                />
                <p className={skill.class}> {skill.text}</p>
              </ListGroup.Item>
            </ListGroup>
          ))}
        </div>
      </div>
    );
  }
}

export default Platforms;
