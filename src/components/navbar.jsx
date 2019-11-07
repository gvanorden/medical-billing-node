import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Bio from "./bio";
import Skills from "./skills";
import Resume from "./resume";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      letters: null,
      tabs: [
        {
          id: 1,
          eventKey: "biography",
          title: "BIOGRAPHY",
          component: <Bio />
        },
        {
          id: 2,
          eventKey: "skills",
          title: "SKILLS",
          component: <Skills />
        },
        {
          id: 3,
          eventKey: "resume",
          title: "RESUME",
          component: <Resume />
        }
      ]
    };

    this.splitTitle = this.splitTitle.bind(this);
  }

  splitTitle(title) {
    let letters = [];
    let titles = title.split("");

    for (let i = 0; i < titles.length; i++) {
      letters.push([i, titles[i]]);
    }
    return letters;
  }

  render() {
    return (
      <Tabs justify defaultActiveKey={this.state.tabs[0].eventKey}>
        {this.state.tabs.map(tab => (
          <Tab key={tab.id} eventKey={tab.eventKey} title={tab.title}>
            <div className={"tab-left-" + tab.eventKey}>
              <div className="tab-title">
                {this.splitTitle(tab.title).map(letter => (
                  <p key={letter[0]} className="tab-title-letter">
                    {letter[1]}
                  </p>
                ))}
              </div>
            </div>
            <div className={"tab-right-" + tab.eventKey}>{tab.component}</div>
          </Tab>
        ))}
      </Tabs>
    );
  }
}

export default Navbar;
