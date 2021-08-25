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
                execution focused on optimization and adaptability to customer
                needs. My passion for programming aligned with my previous
                experience managing highly demanding projects creates a combo
                where I can know how to approach a project on every step of its
                implementation. I pride myself on being a strong team member
                because I like to work in an environment where everyone wants to
                win and they support each other on every step. I love to take on
                a challenge to learn something new in every possible situation
                and I feel highly motivated throughout the process and when I am
                successful. <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;I have a Full Stack Web Developer
                certificate from the University of Central Florida, a bachelor's
                degree in Veterinary Medicine from Universidade Federal de
                Goiás, Brazil, and a Valencia College Alumni I am seeking a
                bachelor’s degree in Software Design and Development. I plan to
                expand my knowledge by further increasing my knowledge on Java
                with a Certification and learning to work with cloud services
                such as Amazon or Oracle. I decided on this path because I want
                to grow exponentially and IT is an ever-increasing field with
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

// <h2 className="m-2">About Me</h2>
// <section className="col container about-me" id="about">
//   <div className="row">
//     <div className="col-4">
//       <img className="card-img" src={Me} alt="Author's" />
//     </div>
//     <div className="col-7 about-me-text fs-3 align-items-start">
//       <p>
//         &nbsp;&nbsp;&nbsp;&nbsp;Full-Stack Software Developer with
//         experience helping companies optimize projects planning and
//         execution focused on optimization and adaptability to customer
//         needs. My passion for programming aligned with my previous
//         experience managing highly demanding projects creates a combo
//         where I can know how to approach a project on every step of its
//         implementation. I pride myself on being a strong team member
//         because I like to work in an environment where everyone wants to
//         win and they support each other on every step. I love to take on a
//         challenge to learn something new in every possible situation and I
//         feel highly motivated throughout the process and when I am
//         successful. <br></br>
//         &nbsp;&nbsp;&nbsp;&nbsp;I have a Full Stack Web Developer
//         certificate from the University of Central Florida, a bachelor's
//         degree in Veterinary Medicine from Universidade Federal de Goiás,
//         Brazil, and a Valencia College Alumni I am seeking a bachelor’s
//         degree in Software Design and Development. I plan to expand my
//         knowledge by further increasing my knowledge on Java with a
//         Certification and learning to work with cloud services such as
//         Amazon or Oracle. I decided on this path because I want to grow
//         exponentially and IT is an ever-increasing field with endless
//         opportunities.
//       </p>
//     </div>
//   </div>
// </section>
