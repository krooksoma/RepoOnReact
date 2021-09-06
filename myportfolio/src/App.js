import "./App.css";
import Aboutme from "./aboutme/aboutme";
import React, { useState } from "react";
import Resume from "./resume/resume";
import Home from "./homepage/home"
import Works from "./works/works";
import Footer from "./footer/footer";
import Contact from "./contact/contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import Images from './img';
// only one element can be returned at a time

function App() {
  const [NavColor, setNavColor] = useState("homepage");
  let currentPath = window.location.pathname;

  return (
    <>
      <Router>
        <header className="container-fluid bg-transparent">
          <div className="logo">
            <h1 style={{ fontSize: "5rem" }}>Romulo Goncalves</h1>
          </div>
          <div className="jumbotron jumbotron-fluid">
            <div className="container border-bottom custom-border">
              <div className="navbar navbar-expand-lg">
                <ul className="navbar-nav mr-auto fs-2">
                  <Link to="/" className="nav-item nav-link">
                    HOMEPAGE
                  </Link>
                  <Link
                    to="/aboutme"
                    path="/aboutme"
                    className="nav-item nav-link"
                  >
                    ABOUT ME
                  </Link>
                  <Link to="/works" className="nav-item nav-link">
                    WORKS
                  </Link>
                  <Link to="/contact" className="nav-item nav-link">
                    CONTACT
                  </Link>
                  <Link
                    to="/resume"
                    className="nav-item nav-link"
                    href="./assets/ResumeDoc.pdf"
                  >
                    RESUME
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <Switch>
          <Route path="/works">
            <Works />
          </Route>
          <Route path="/aboutme">
            <Aboutme />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}
export default App;
