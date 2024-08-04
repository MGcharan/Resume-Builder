// eslint-disable-next-line no-unused-vars
import React from "react";
import "../Resources/templateStyle.css";

function Template1() {
  const user = JSON.parse(localStorage.getItem("token"));
  
  return (
    <>
      <div className="template1-parent">
        <div className="top  d-flex justify-content-between">
          <h1 className="mt-5">
            {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
          </h1>
          <div>
            <p>{user.email}</p>
            <p>{user.mobileNumber}</p>
            <p>{user.address}</p>
            <p>{user.country}</p>
            <p>{user.linkedin}</p>
            <p>{user.github}</p>
            <p>{user.portfolio}</p>
          </div>
        </div>

        {/* Objective */}

        <div className="divider mt-2"> </div>
        <div className="objective">
          <h1 className="underline mt-2">Objective</h1>
          <p>{user.careerObjective}</p>
        </div>



         {/* Skills */}
        <div className="divider mt-2"> </div>
        <div className="   same skills mt-2">
       <h1 className="skills-title">Skills</h1>
         {user.skills.map((item, index) => (
    <div className="skill-item d-flex" key={index}>
      <div>
       
       
          <b>{item.skills} </b>
      
        
      </div>
    </div>
  ))}
</div>


           {/* education */}
        <div className="divider mt-2"> </div>
        <div className=" same education mt-2">
          <h1 className="educate">Education</h1>
          {user.education.map((education, index) => {
            return (
              <div className="d-flex educate" key={index}>
                <div>
                  {" "}
                  <h6 style={{ fontWeight: "500", color:"gray" }}>
                    <b>{education.Qualification} </b>{" "}
                    <span
                      className="percent"
                      style={{ marginLeft: 5, color: "brown" }}
                    >
                      {" "}
                      --{education.Percentage} %
                    </span>{" "}
                  </h6>
                  {education.Institution}
                  <br />
                  <div>{education.range}</div>
                </div>
              </div>
            ); /* d-flex div*/
          })}
        </div>

         {/* Experience */}
        <div className="divider mt-2"> </div>
        <div className=" same experience mt-2">
          <h1 className="exp">Experience</h1>
          {user.experience.map((exp, index) => {
            return (
              <div className="d-flex educate" key={index}>
                <div>
                 
                  <h6 style={{ fontWeight: "500", color:"gray" }}>
                    <b>{exp.Company}    <span style={{ marginLeft: 5, color: "brown" }}>
                    [{exp.year} Years]
                   
                     </span> </b>
                   
                  </h6>
                  {exp.Place}
                  <br />
                  <div>{exp.range}</div>
                </div>
              </div>
            ); /* d-flex div*/
          })}
        </div>

           {/* Projects*/}
        <div className="divider mt-2"> </div>
        <div className=" same Projects mt-2">
          <h1 className="pro ">Projects</h1>
          {user.projects.map((project, index) => {
            return (
              <div className="d-flex projet" key={index}>
                <div>
                <h6 style={{ fontWeight: "500", color:"gray" }}>
                    <b>{project.title} [{project.range}]</b>
                   
                  </h6>
                  
                 <div> {project.description}</div>
               <br />
                 
                  </div>
                  
                </div>
             
            ); /* d-flex div*/
          })}
        </div>


       

      </div>
    </>
  );
}

export default Template1;
