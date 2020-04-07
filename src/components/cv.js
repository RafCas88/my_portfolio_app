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
          </Cell>
          <Cell className="cv-right-col" col={8}>Right side</Cell>
        </Grid>
      </div>
    )
  }
}

export default Cv;
