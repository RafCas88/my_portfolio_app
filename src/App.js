import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title={<Link style={{textDecoration: 'none',
           color: 'black', fontSize: '20px'}} to="/">MyPortfolio</Link>} scroll>
              <Navigation>
                  <Link to="/cv" style={{color: 'black', fontSize: '20px'}}>Cv</Link>
                  <Link to="/aboutme" style={{color: 'black', fontSize: '20px'}}>About Me</Link>
                  <Link to="/projects" style={{color: 'black', fontSize: '20px'}}>Projects</Link>
                  <Link to="/contact" style={{color: 'black', fontSize: '20px'}}>Contact</Link>
              </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration: 'none',
           color: 'black'}} to="/">MyPortfolio</Link>}>
              <Navigation className="nav-bar">
              <Link to="/cv" style={{color: 'black'}}>Cv</Link>
              <Link to="/aboutme" style={{color: 'black'}}>About Me</Link>
              <Link to="/projects" style={{color: 'black'}}>Projects</Link>
              <Link to="/contact" style={{color: 'black'}}>Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
  </div>
      );
  }
}

export default App;
