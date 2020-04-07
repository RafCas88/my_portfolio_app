import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Cv extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
             <div style={{textAlign: 'center'}}>
                <img
                  src="https://mail.google.com/mail/u/0/#inbox?projector=1"
                  alt="raf"
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
