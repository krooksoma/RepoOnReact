import React from "react";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 d-flex justify-content-end m-3">
            <a
              href="https://github.com/krooksoma"
              className="custom-link"
              rel="noreferrer"
            >
              <FaGithub style={{ fontSize: "5rem" }} />
            </a>
            
          </div>
          <div className="col-4 d-flex justify-content-start m-2">
            <a
              href="https://www.linkedin.com/in/romulo-g-45602539/"
              className="nav-link custom-link"
              rel="noreferrer"
            >
              <FaLinkedin style={{ fontSize: "5rem" }} />
            </a>
            
            <div className="body"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
