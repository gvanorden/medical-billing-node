import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import mssql from "../../images/language-logos/mssql.png";
import mysql from "../../images/language-logos/mysql.png";
import postgresql from "../../images/language-logos/postgresql.png";
import powershell from "../../images/language-logos/powershell.png";
import python from "../../images/language-logos/python.png";
import javascript from "../../images/language-logos/javascript.png";
import html from "../../images/language-logos/html.png";
import css from "../../images/language-logos/css.png";
import react from "../../images/language-logos/react.png";
import node from "../../images/language-logos/node.png";
import net from "../../images/language-logos/net.png";
import java from "../../images/language-logos/java.png";

class Languages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      langOne: [
        { id: 1, img: mssql, text: "MS SQL", class: "skills-text red" },

        {
          id: 2,
          img: postgresql,
          text: "PostgreSQL",
          class: "skills-text red"
        },
        { id: 3, img: python, text: "Python", class: "skills-text" },
        { id: 4, img: node, text: "Node", class: "skills-text" },
        { id: 5, img: html, text: "HTML", class: "skills-text" },
        { id: 6, img: net, text: "C#/.NET", class: "skills-text blue" }
      ],
      langTwo: [
        { id: 1, img: mysql, text: "MySQL", class: "skills-text red" },
        {
          id: 2,
          img: powershell,
          text: "PowerShell",
          class: "skills-text red"
        },
        { id: 3, img: javascript, text: "JavaScript", class: "skills-text" },
        { id: 4, img: react, text: "React", class: "skills-text" },
        { id: 5, img: css, text: "CSS", class: "skills-text" },
        { id: 6, img: java, text: "Java", class: "skills-text blue" }
      ]
    };
  }

  render() {
    return (
      <div className="skills-container">
        <p className="skills-title">LANGUAGES</p>
        <div className="skills-list-container-one">
          {this.state.langOne.map(skill => (
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
          {this.state.langTwo.map(skill => (
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

export default Languages;
