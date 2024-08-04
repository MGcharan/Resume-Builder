// eslint-disable-next-line no-unused-vars
import React from "react";
import "../Resources/templateStyle.css";

function Template2() {
  const user = JSON.parse(localStorage.getItem("token"));
  
  
  return (
    <>
      <div className="template1-parent">
        <div className="top  d-flex  flex-column">
          <h1 >
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
        <div className="divider mt-1"> </div>

        <div className="objective">
          <h3 className=" mt-2" style={{backgroundColor:'gray',padding:8,color:"black"}}>Objective</h3>
          
          <p>{user.careerObjective}</p>
        </div>



         {/* Skills */}
        <div className="divider mt-2"> </div>
        <div className="   same skills mt-2">
      <h3 style={{ backgroundColor: 'gray', padding: '8px', color: 'black', marginBottom: 20 }}>Skills</h3>
      <ul style={{ padding: '0', margin: '0', listStyleType: 'none', marginBottom: 20  }}>
        {user.skills.map((item, index) => (
          <li key={index} style={{ display: 'inline', marginRight: '10px', }}>
            <span style={{
              backgroundColor: '#ccc',
              color: 'rgb(94, 94, 94)',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
              
            }}>
              {item.skills}
            </span>
          </li>
        ))}
      </ul>
</div>


           {/* education */}
        <div className="divider mt-2"> </div>
        <div className=" same education mt-2">
          <h3 className="educate"  style={{backgroundColor:'gray',padding:8,color:"black"}}>Education</h3>
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
          <h3 className="exp"  style={{backgroundColor:'gray',padding:8,color:"black"}}>Experience</h3>
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
          <h3 className="pro"  style={{backgroundColor:'gray',padding:8,color:"black"}}>Projects</h3>
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

export default Template2;
