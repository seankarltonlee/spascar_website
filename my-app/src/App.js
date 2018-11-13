import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStroopwafel,
  faAlignJustify,
  faLinkedin
} from "@fortawesome/free-solid-svg-icons";
library.add(faStroopwafel, faAlignJustify);

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <NavBar />
        </div>
        <JumboTron />
        <TrailerArea />
        <Features />
        <TeamList />
      </div>
    );
  }
}

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navPad">
      <a className="navbar-brand logo" href="#home">
        Space Force
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon navToggle">
          <FontAwesomeIcon icon="align-justify" />
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <a className="nav-item nav-link" href="#trailer">
            Trailer
          </a>
          <a className="nav-item nav-link" href="#features">
            Features
          </a>
          <a className="nav-item nav-link" href="#team">
            Team
          </a>
        </div>
      </div>
    </nav>
  );
};

const JumboTron = () => {
  return (
    <div>
      <ScrollableAnchor id={"home"}>
        <div />
      </ScrollableAnchor>
      <div className="jumbotron jumbotron-fluid d-flex align-items-center justify-content-center paral paralsec">
        <div className="container">
          <h1 className="display-4">US Space Force Flying Sim 2019</h1>
          <p className="lead">The new military for the 21st century</p>
        </div>
      </div>
    </div>
  );
};

const TrailerArea = () => {
  return (
    <div className="container trailerArea">
      <ScrollableAnchor id={"trailer"}>
        <div />
      </ScrollableAnchor>
      <div className="d-flex align-items-center justify-content-center">
        <h1 className="sectionHeader">Trailer</h1>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="container featuresArea">
      <ScrollableAnchor id={"features"}>
        <div> </div>
      </ScrollableAnchor>
      <div className="d-flex align-items-center justify-content-center">
        <h1 className="sectionHeader">Features</h1>
      </div>
    </div>
  );
};

const TeamList = () => {
  return (
    <div className="container teamArea justify-content-center">
      <ScrollableAnchor id={"team"}>
        <div> </div>
      </ScrollableAnchor>
      <h1 className="sectionHeader">MEET THE TEAM</h1>
      <div className="d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col-md-4 mb-5">
            <div className="card">
              <img
                className="profileIMG mx-auto"
                src="https://media.discordapp.net/attachments/482246612387627030/511294086632702003/image5.jpg?width=740&height=935"
              />
              <div className="container">
                <h2>Jonathan Wilson</h2>
                <span className="linkedinIcon">
                  <i className="fab fa-linkedin" />
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="card">
              <img
                className="profileIMG mx-auto"
                src="https://www.w3schools.com/howto/img_avatar.png"
              />
              <div className="container">
                <h2>Mike Han</h2>
                <span className="linkedinIcon">
                  <i className="fab fa-linkedin" />
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="card">
              <img
                className="profileIMG mx-auto"
                src="https://media.licdn.com/dms/image/C5603AQFz6LqNpXBScA/profile-displayphoto-shrink_800_800/0?e=1547683200&v=beta&t=CwS20gxS2T3UEqJu0y_ZFuuLl2sGUnFAvcqfMKCAcKs"
              />
              <div className="container">
                <h2>Robert Shane</h2>
                <span className="linkedinIcon">
                  <a
                    href="https://www.linkedin.com/in/robert-shane-b7b76b3b/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="offset-md-1 col-md-5 mb-5">
            <div className="card">
              <img
                className="profileIMG mx-auto"
                src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/39036842_1355268684606847_5507566692579934208_n.jpg?_nc_cat=102&_nc_ht=scontent-sjc3-1.xx&oh=37bbd6316c76fb66e14ebc2cab55a2df&oe=5C813C22"
              />
              <div className="container">
                <h2>Sean Lee</h2>
                <span className="linkedinIcon">
                  <i className="fab fa-linkedin" />
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-5 mb-5">
            <div className="card">
              <img
                className="profileIMG mx-auto"
                src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/27332357_1970517419938358_299966863900634877_n.jpg?_nc_cat=108&_nc_ht=scontent-sjc3-1.xx&oh=0466a67d77d7bf2d886582d733f6fe5c&oe=5C6692AD"
              />
              <div className="container">
                <h2>Stephen Koy</h2>
                <span className="linkedinIcon">
                  <i className="fab fa-linkedin" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
