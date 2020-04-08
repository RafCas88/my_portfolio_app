import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import logo from './logo.png';
import Education from './education';
import Experience from './experience';

class Cv extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
             <div style={{textAlign: 'center'}}>
                <img
                  src={logo}
                  alt="logo"
                  style={{height: '200px'}}
                />
             </div>

             <h2 style={{paddingTop: '2em'}}>Raffaele Castaldo</h2>
             <h4 style={{color: 'grey'}}>Software Developer</h4>
             <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
             <p>Recently graduated in Professional Software Development from CodeClan.
             Looking forward to applying my new tech skills in the industry.</p>
             <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
             <h5>Address</h5>
             <p>7/4 Coxfield, Edinburgh</p>
             <h5>Phone</h5>
             <p>07796264489</p>
             <h5>Email</h5>
             <p>raffaelecastaldo881@gmail.com</p>
             <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="cv-right-col" col={8}>
             <h2>Education</h2>

             <Education
               startYear={2013}
               endYear={2015}
               universityName="University of Naples Federico II"
               universityQualification="Master degree in History of Art"
             />

             <Education
               startYear={2010}
               endYear={2013}
               universityName="University of Naples Federico II"
               universityQualification="Bachelor degree in Archeology and History of Art"
             />

             <hr style={{borderTop: '3px solid #e22947' }} />

             <h2>Work History</h2>

             <Experience
               startYear={2018}
               endYear={2019}
               jobName="Trainee Customer Service Leader"
               companyName="World Duty Free"
               jobDescription="Job promotion to management position.Responsible for daily management of customer service and team which included managing rotas, carrying out 1:1 reviews, dealing with escalated customer queries and any activities in line with company policies and procedures.Target driven, using a coaching approach to inspire team in achieving daily KPIs."
             />

             <Experience
               startYear={2016}
               endYear={2018}
               jobName="Customer Service Assistant"
               companyName="World Duty Free"
               jobDescription="Delivered high standard customers service whilst following strict regulations and hitting daily KPIs."
             />

             <Experience
               startYear={2016}
               endYear={2018}
               jobName="Tour Guide & Museum Assistant"
               companyName="Manchester United F.C."
               jobDescription="Responsible for carrying out high quality tours around the stadium whilst following health and safety regulations ensuring guests were safe."
             />

              <hr style={{borderTop: '3px solid #e22947' }} />
              <h2>Skills</h2>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Cv;
