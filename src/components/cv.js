import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import logo from './logo.png';


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
          <Cell className="cv-right-col" col={8}>Right side</Cell>
        </Grid>
      </div>
    )
  }
}

export default Cv;
