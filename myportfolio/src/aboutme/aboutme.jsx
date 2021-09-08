import React from "react";
import Me from "../img/Me.jpg";


function Main() {
  console.log("This is the current page", window.location.pathname);
  return (
    <>
      <div
        className="card container bg-transparent "
        style={{ maxWidth: "800px" }}
      >
        <div className="row g-0 justify-content-center align-items-center ">
          <div className="col-md-4">
            <img src={Me} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fs-1">About Me</h5>
              <p className="card-text fs-4">
                &nbsp;&nbsp;&nbsp;&nbsp;Full-Stack Software Developer with
                experience helping companies optimize projects planning and
                execution focused on adaptability to customer
                needs. My passion for programming aligned with my previous
                experience managing demanding projects has taught me
                 how to approach a project at each unique step of its
                implementation. I pride myself on being a strong team player
                and seeking new challenges on a routine basis. These two traits are 
                important to me because I love to work in an environment where everyone wants to
                win and because I am always striving for continuous improvement. 
                 <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;I have a Full Stack Web Developer
                certificate from the University of Central Florida, a doctorate
                degree in Veterinary Medicine from Universidade Federal de
                Goiás, Brazil, and I am seeking a
                bachelor’s degree in Software Design and Development at Valencia. I plan to
                expand my knowledge by further increasing my knowledge in Java
                with a Certification and learning to work with cloud services
                such as Amazon or Oracle. My motivation for choosing this path is based
                on my desire to grow exponentially and the knowledge that IT is an ever-increasing field with
                endless opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>

   
    </>
  );
}

export default Main;

