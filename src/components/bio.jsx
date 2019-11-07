import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";
import Fade from "react-slideshow-image/lib/components/slideshow/fade";
import lehighLogo from "../images/lehigh-logo.png";
import lehigh1 from "../images/lehigh-1.png";
import lehigh2 from "../images/lehigh-2.png";
import lehigh3 from "../images/lehigh-3.png";

const slideProperties = {
  duration: 4000,
  transitionDuration: 2500,
  infinite: true
};

class Bio extends Component {
  state = {
    slideImages: [
      { id: 1, value: lehigh1 },
      { id: 2, value: lehigh2 },
      { id: 3, value: lehigh3 }
    ],
    degrees: [["MAJOR", "Marketing", "major"], ["MINOR", "Psychology", "minor"]]
  };
  render() {
    return (
      <div className="bio">
        <div id="bio-top">
          <div className="philo-container">
            <p className="philo-title">PHILOSOPHY</p>
            <p className="philo-text">
              A work ethic must be driven by intellectual honesty and a strong willingness to self-educate.
              Mentalities derived from such an ethic should recognize prevailing cognitive ceilings as temporary,
              existing only to be replaced by a deeper sense of knowledge and understanding.
            </p>
          </div>
          <div className="edu-container">
            <p className="edu-title">EDUCATION</p>
            <div className="edu-text">
              <div className="edu-logo-container">
                <img
                  className="edu-logo"
                  src={lehighLogo}
                  alt="Lehigh Univserity Logo"
                />
              </div>
              <div className="edu-degree-container">
                <div className="degree-table-container">
                  <Table className="degree-table">
                    <tbody>
                      <tr>
                        <td className="degree-title">
                          <b>YEARS</b>
                        </td>
                        <td className="degree-text">2005-2009</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div className="degree-list-container">
                  {this.state.degrees.map(degree => (
                    <ListGroup key={degree[2]} className={"degree-list " + degree[2]}>
                      <ListGroup.Item className="degree-list-title">
                        <b>{degree[0]}</b>
                      </ListGroup.Item>
                      <ListGroup.Item className="degree-list-text">
                        {degree[1]}
                      </ListGroup.Item>
                    </ListGroup>
                  ))}
                </div>
              </div>
              <div className="bio-slide-container">
                <Fade {...slideProperties}>
                  {this.state.slideImages.map(slide => (
                    <div key={slide.id} className="slide-photo-container">
                      <img
                        className="slide-photo"
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
        <div className="bio-bottom">
          <div className="background-container">
            <p className="background-title">BACKGROUND</p>
            <p className="background-text">
              I build data & analytic solutions for both small-scale and Fortune
              500 companies using SQL, PowerShell, Python, C#/.NET and
              STEALTHbits products. I've also acquired skillsets in both front
              and back-end web development. For instance, this site is built
              with React and uses AWS for web hosting.
            </p>
            <div className="background-table-container">
              <Table className="background-table">
                <tbody>
                  <tr>
                    <td>Solutions Engineer</td>
                    <td>2017-2019 (current)</td>
                    <td>2.5 years</td>
                    <td>
                      <i>STEALTHbits</i>
                    </td>
                  </tr>
                  <tr>
                    <td>Implementation Engineer</td>
                    <td>2014-2017</td>
                    <td>2.5 years</td>
                    <td>
                      <i>STEALTHbits</i>
                    </td>
                  </tr>
                  <tr>
                    <td>Quality Assurance Engineer</td>
                    <td>2013-2014</td>
                    <td>1.5 years</td>
                    <td>
                      <i>STEALTHbits</i>
                    </td>
                  </tr>
                  <tr>
                    <td>SEO Intern</td>
                    <td>2012-2013</td>
                    <td>0.5 years</td>
                    <td>
                      <i>Rosenblum Law Firm</i>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;
