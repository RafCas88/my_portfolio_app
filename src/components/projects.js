import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, IconButton } from 'react-mdl';

class Project extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  toggleCategories(){

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#000000', height: '176px', background:
        'url(https://www.tenzione.it/wp-content/uploads/2016/09/ruby_logo.jpg_234%C3%97114_pixels.jpg) center / cover'}}>
          </CardTitle>
          <CardText style={{fontWeight: 'bold', fontSize: '18px', color: 'black'}}>
          Rafa's club gym project
          </CardText>
          <CardActions border>
          <a href="https://github.com/RafCas88/Gym_project" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-github-square" aria-hidden="true" />
          </a>
          </CardActions>
          <CardMenu style={{color: '#000000'}}>
          <IconButton name="share" />
          </CardMenu>
          </Card>
        </div>

        )
    } else if(this.state.activeTab === 1) {
      return(
        <div className="projects-grid">
        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#000000', height: '176px', background:
        'url(https://miro.medium.com/max/1045/1*ieROYZuCX-w0p9V7UswJbQ.png) center / cover'}}>
          </CardTitle>
          <CardText style={{fontWeight: 'bold', fontSize: '18px', color: 'black'}}>
          ISS project
          </CardText>
          <CardActions border>
          <a href="https://github.com/RafCas88/ISS_project" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-github-square" aria-hidden="true" />
          </a>
          </CardActions>
          <CardMenu style={{color: '#000000'}}>
          <IconButton name="share" />
          </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return(
        <div className="projects-grid">
        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#000000', height: '176px', background:
        'url(https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo-768x528.png) center / cover'}}>
          </CardTitle>
          <CardText style={{fontWeight: 'bold', fontSize: '18px', color: 'black'}}>
          Jurassic Park project
          </CardText>
          <CardActions border>
          <a href="https://github.com/RafCas88/" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-github-square" aria-hidden="true" />
          </a>
          </CardActions>
          <CardMenu style={{color: '#000000'}}>
          <IconButton name="share" />
          </CardMenu>
          </Card>
        </div>
      )
    }
  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
          <Tab>Ruby</Tab>
          <Tab>Vue.js | MongoDB</Tab>
          <Tab>Java | React.js</Tab>
        </Tabs>

      <section className="projects-grid">
      <Grid>
      <Cell col={12}>
      <div className="content">{this.toggleCategories()}</div>
      </Cell>
      </Grid>

      </section>
      </div>

    )
  }
}

export default Project;
