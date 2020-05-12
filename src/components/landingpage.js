import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import raf from './raf.jpg'

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <Grid className="landing-grid">
      <Cell col={12}>
      <img
      src={raf}
      alt="Raf"
      className="Raf-img"
      />

      <div className="banner-text">
      <h1>Graduate Software Developer</h1>

      <hr />

      <p>HTML/CSS | Ruby | Java | JavaScript | React | Vue | NodeJS | Express | MongoDB |
      Sinatra | PostgreSQL | Spring</p>

      <div className="social-links">

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/raffaele-castaldo88/" rel="noopener noreferrer" target="_blank">
      <i className="fa fa-linkedin-square" aria-hidden="true" />
      </a>

      {/* Github */}
      <a href="https://github.com/RafCas88" rel="noopener noreferrer" target="_blank">
      <e className="fa fa-github-square" aria-hidden="true" />
      </a>

      </div>
      </div>
      </Cell>
      </Grid>

      </div>
    )
  }
}

export default Landing;
