import React from "react";

import Pdf from "./resume.pdf";
import { FaFilePdf } from "react-icons/fa";

export default function Resume() {
  return (
    <>
      <div className="container p-5" style={{ maxWidth: "45rem" }}>
        <div className="col m-2">
          <div className="row">
            <a
              className="nav-link"
              href={Pdf}
              target="_blank"
              style={{ fontSize: "3rem" }}
              rel="noreferrer"
            >
              <FaFilePdf style={{ fontSize: "4rem" }} />
              Visualize my Resume
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="col m-3">
          <div className="row">
            <div className="card m-2 card-custom" style={{ maxWidth: "25rem" }}>
              <h3 className="card-title border-bottom p-2">
                Front-end Technologies
              </h3>
              <div className="card-text p-2 fs-2">
                <p>HTML-5 & CSS-3</p>
                <p>REACT</p>
              </div>
            </div>
          <div className="card m-2 card-custom" style={{ maxWidth: "25rem" }}>
            <h3 className="card-title border-bottom p-2">Back-end Technologies</h3>
            <div className="card-text p-2 fs-2">
              <p>Node.js</p>
              <p>MongoDB</p>
              <p>MySQL</p>
              <p>Javascript</p>
              <p>Java</p>
              <p>Spring Boot</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
