import React from "react";
import {FaGithub, FaRocket} from 'react-icons/fa';

function anotherprojects(props) {
  return (
    <div className="col d-card-2">
      <figure className={props.imageClass} alt={props.title}>
        <h3 style={{fontSize: "4rem"}}>{props.title}</h3>
        <a className="nav-link custom-link " href={props.githubLink} target="_blank" rel="noreferrer">
          <FaGithub />
          GITHUB
        </a>
        <a className="nav-link custom-link fixed" href={props.deployedSite} target="_blank" rel="noreferrer">
          <FaRocket />
          Deployed Site</a>
      </figure>
    </div>
  );
}

export default anotherprojects;

