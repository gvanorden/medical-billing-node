import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Fade from "react-slideshow-image/lib/components/slideshow/fade";
import lehighLogo from "../images/lehigh-logo.png";
import lehigh1 from "../images/lehigh-1.png";
import lehigh2 from "../images/lehigh-2.png";
import lehigh3 from "../images/lehigh-3.png";

const slideProperties = {
  duration: 5000,
  transitionDuration: 2000,
  infinite: true,
  indicators: true,
  arrows: true
};

class Education extends Component {
  state = {
    slideImages: [
      { id: 1, value: lehigh1 },
      { id: 2, value: lehigh2 },
      { id: 3, value: lehigh3 }
    ]
  };

  render() {
    return (
      <div className="education-container">
        <div className="education">
          <div className="left">
            <div className="lehigh-logo-container">
              <img
                className="lehigh-logo"
                src={lehighLogo}
                alt="Lehigh Univserity Logo"
              />
            </div>
            <Table className="edu-table">
              <tbody>
                <tr>
                  <td className="edu-title remove-top-border">ATTENDED</td>
                  <td className="edu-text remove-top-border">2006 - 2010</td>
                </tr>
                <tr>
                  <td className="edu-title">MAJOR</td>
                  <td className="edu-text">
                    <i>Marketing</i>
                  </td>
                </tr>
                <tr>
                  <td className="edu-title">MINOR</td>
                  <td className="edu-text">
                    <i>Psychology</i>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="right">
            <div className="edu-slide-container">
              <Fade {...slideProperties}>
                {this.state.slideImages.map(slide => (
                  <div key={slide.id} className="each-fade">
                    <img
                      className="lehigh-photo"
                      src={slide.value}
                      alt="Lehigh University"
                    />
                  </div>
                ))}
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
