import React from "react";
import Java from "../img/java.png";
import Js from "../img/mern.png";
import Pdf from "./resume.pdf";
import{FaFilePdf} from 'react-icons/fa';

export default function Resume() {
  return (
    <>
    <div className="container">
      <div className="col m-2">
        <div className="row">
          <a className="nav-link" href={Pdf} target="_blank" style={{fontSize: "3rem"}} rel="noreferrer">
            <FaFilePdf style={{fontSize: "4rem"}}/>Visualize my Resume
          </a>
        </div>
      </div>
      <div className="col container bg-transparent">
        <div className="row justify-content-center m-4 align-items-center">
          <h2 className="card-title">Languages: </h2>
          <img
            src={Java}
            style={{ maxHeight: "16rem", maxWidth: "18rem" }}
            alt="java"
          ></img>
          <img
            src={Js}
            style={{ maxHeight: "20rem", maxWidth: "18rem" }}
            alt="java"
          ></img>
        </div>
      </div>

    </div>
    </>
  );
}
