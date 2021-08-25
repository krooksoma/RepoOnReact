import React from "react";
import projects from "./projects.json";
import AProjects from "../anotherprojects";
import {FaGithub, FaRocket} from 'react-icons/fa';


let iconStyle = {color: 'orange'}
function Works() {
  console.log("This is the current page" , window.location.href);
  return (
    <>
      <section className="container-flex about-me work-row">
        <div className="about-title work-title">
          <h2 className="work-header" style={{fontSize:" 4rem"}}>Works</h2>
        </div>
        {projects.map((e, index) =>
          index === 0 ? (
            <div className="work-picture" key={index}>
              <div className="custom-link">
                <h2>Most Recent Work</h2>
                <figure
                  className={e.className}
                  id="work"
                  alt="Team Profile Generator"
                >
                  <h3 id="most-recent-title" style={{fontSize: "6rem"}}>{e.title}</h3>
                  <a
                    className="nav-link custom-link"
                    href={e.githubLink}
                    target="_blank"
                    rel="noreferrer"
                  ><FaGithub style={iconStyle}/>
                    GITHUB
                  </a>
                  <a className="nav-link custom-link" href={e.deployedSite}>
                    <FaRocket />
                    Deployed Page
                  </a>
                </figure>
              </div>
            </div>
            
          ) : (
            <div className="container m-5">              
              <div className="row">
                <AProjects
                  imageClass={e.className}
                  title={e.title}
                  githubLink={e.githubLink}
                  deployedSite={e.deployedSite}
                  key={index}
                />
              </div>
            </div>
          )
        )}
      </section>
    </>
  );
}

export default Works;
