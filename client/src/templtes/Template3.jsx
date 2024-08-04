// eslint-disable-next-line no-unused-vars
import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


function Template3() {
  const user = JSON.parse(localStorage.getItem("token"));
  



  
  return (
    <div style={{ display: 'flex', maxWidth: '900px', margin: 'auto', fontFamily: 'Arial, sans-serif', color: '#333' }}>
      {/* Sidebar */}
      <div style={{ flex: '1', padding: '20px', borderRight: '1px solid #ccc', backgroundColor: '#36799B' }}>
        <h1 style={{ fontSize: '28px', fontWeight:"bolder", marginBottom: '10px'  }}>
          {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
        </h1>
        <div style={{ fontSize: '14px', marginBottom: '20px' }}>
        <p><i className="fas fa-phone"></i> {user.mobileNumber}</p>
          <p><i className="fas fa-envelope"></i> {user.email}</p>
          <p><i className="fas fa-map-marker-alt"></i> {user.address}</p>
          <p><i className="fas fa-globe"></i> {user.country}</p>
          {user.linkedin && <p><i className="fab fa-linkedin"></i> {user.linkedin}</p>}
          {user.github && <p><i className="fab fa-github"></i> {user.github}</p>}
          {user.portfolio && <p><i className="fas fa-briefcase"></i> {user.portfolio}</p>}
        
        </div>

        {/* SKILLS */}
        
        <h3 style={{ fontSize: '18px',fontWeight:"bold", marginBottom: '10px' ,marginTop:"20%" }}>SKILLS</h3>
        <ul style={{ padding: '0', margin: '0', listStyleType: 'none' }}>
          {user.skills.map((item, index) => (
            <li key={index} style={{ marginBottom: '10px', fontSize: '14px' }}>
              {item.skills}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: '2', padding: '20px' }}>
        {/* Professional Summary */}
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '18px', backgroundColor: 'gray', color: 'black', padding: '8px', borderRadius:10 }}>PROFESSIONAL SUMMARY</h3>
          <p style={{ marginTop: '10px' }}>{user.careerObjective}</p>
        </div>

        <hr style={{ margin: '20px 0', border: '1px solid #ccc' }} />

        {/* Experience */}
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '18px', backgroundColor: 'gray', color: 'black', padding: '8px',  borderRadius:10  }}>EXPERIENCE</h3>
          {user.experience.map((exp, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <h6 style={{ fontWeight: '500', margin: '0' }}>
                {exp.Company} <span style={{ color: 'brown' }}>[{exp.year} Years]</span>
              </h6>
              <p style={{ margin: '0' }}>{exp.Place}</p>
              <p style={{ margin: '0' }}>{exp.range}</p>
              <ul style={{ padding: '0', listStyleType: 'disc', marginLeft: '20px' }}>
                {exp.description && exp.description.split('\n').map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr style={{ margin: '20px 0', border: '1px solid #ccc' }} />

        {/* Education */}
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '18px', backgroundColor: 'gray', color: 'black', padding: '8px',  borderRadius:10  }}>EDUCATION</h3>
          {user.education.map((education, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <h6 style={{ fontWeight: '500', margin: '0' }}>
                {education.Qualification} <span style={{ color: 'brown' }}>-- {education.Percentage} %</span>
              </h6>
              <p style={{ margin: '0' }}>{education.Institution}</p>
              <p style={{ margin: '0' }}>{education.range}</p>
            </div>
          ))}
        </div>

        <hr style={{ margin: '20px 0', border: '1px solid #ccc' }} />

        {/* Projects */}
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '18px', backgroundColor: 'gray', color: 'black', padding: '8px',  borderRadius:10  }}>PROJECTS</h3>
          {user.projects.map((project, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <h6 style={{ fontWeight: '500', margin: '0' }}>
                {project.title} <span style={{ color: 'brown' }}>[{project.range}]</span>
              </h6>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Template3;
