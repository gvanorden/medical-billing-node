import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import activedirectory from "../../images/application-logos/activedirectory.png";
import hyperv from "../../images/application-logos/hyperv.png";
import office from "../../images/application-logos/office.png";
import sharepoint from "../../images/application-logos/sharepoint.png";
import splunk from "../../images/application-logos/splunk.png";
import sqlserver from "../../images/application-logos/sqlserver.png";
import stealthaudit from "../../images/application-logos/stealthaudit.png";
import symantec from "../../images/application-logos/symantec.png";
import vstudio from "../../images/application-logos/vstudio.png";
import vmware from "../../images/application-logos/vmware.png";

class Applications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      applicationsOne: [
        { id: 1, img: sqlserver, text: "SQL Server", class: "skills-text red" },
        { id: 2, img: vmware, text: "VMware", class: "skills-text red" },
        { id: 3, img: splunk, text: "Splunk", class: "skills-text" },
        { id: 4, img: symantec, text: "SymantecDLP", class: "skills-text" },
        {
          id: 5,
          img: activedirectory,
          text: "Active Directory",
          class: "skills-text"
        },
        { id: 6, img: "", text: "", class: "skills-text" }
      ],
      applicationsTwo: [
        { id: 1, img: office, text: "MS Office", class: "skills-text" },
        { id: 2, img: hyperv, text: "Hyper-V", class: "skills-text" },
        { id: 3, img: vstudio, text: "Visual Studio", class: "skills-text" },
        {
          id: 4,
          img: stealthaudit,
          text: "StealthAUDIT",
          class: "skills-text"
        },
        { id: 5, img: sharepoint, text: "SharePoint", class: "skills-text" },
        { id: 6, img: "", text: "", class: "skills-text" }
      ]
    };
  }
  render() {
    return (
      <div className="skills-container">
        <p className="skills-title">APPLICATIONS</p>
        <div className="skills-list-container-one">
          {this.state.applicationsOne.map(skill => (
            <ListGroup key={skill.id} className="skills-list">
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
        <div className="skills-list-container-two">
          {this.state.applicationsTwo.map(skill => (
            <ListGroup key={skill.id} className="skills-list">
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

export default Applications;
