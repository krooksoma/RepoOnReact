import React from "react";
import {FaGithub, FaRocket} from 'react-icons/fa';

function anotherprojects(props) {
  return (
    <div className="col d-card">
      <figure className={props.imageClass} alt={props.title}>
        <h3 style={{fontSize: "4rem"}}>{props.title}</h3>
        <a className="nav-link fs-1 nav-link-2" href={props.githubLink} target="_blank" rel="noreferrer">
          <FaGithub />
          GITHUB
        </a>
        <a className="nav-link fs-1 nav-link-2" href={props.deployedSite} target="_blank" rel="noreferrer">
          <FaRocket />
          Deployed Site</a>
      </figure>
    </div>
  );
}

export default anotherprojects;

