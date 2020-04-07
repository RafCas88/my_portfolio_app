import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <Grid className="landing-grid">
      <Cell col={12}>
      <img
      src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/17457286_10154387967721629_2899541161738798863_n.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=Nw5bVh_ewo4AX9EUonu&_nc_ht=scontent-lht6-1.xx&oh=39f0438bb18705fe8f06911489b7844b&oe=5EB2B4CC"
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
      <i className="fa fa-github-square" aria-hidden="true" />
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
