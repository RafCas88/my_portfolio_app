import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
       <Grid className="contact-grid">
        <Cell col={6}>
        <h2>Raffaele Castaldo</h2>
        <img
         src="https://media-exp1.licdn.com/dms/image/C4D03AQHnrt3r54lRwg/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=UzoItLuMHx9_GNRYuEvmscOUd04Pcbrctsup_5o8Da4"
         alt="raf"
         style={{height: '250px'}}
        />
        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>I am a Junior Software Developer with a background in retail and team management.
        I took the decision to retrain through CodeClan and pursue a career within Software Development
        as Technology is an industry which has almost limitless applications. This is an exciting opportunity
        and I am now looking forward to practicing my new technical skills in the industry
        and head down the path of continuous learning.</p>
        </Cell>
        <Cell col={6}>
         <h2>Contact Me</h2>
         <hr/>

         <div className="contact-list">
         <List>
           <ListItem>
             <ListItemContent style={{fontSize: '28px', fontFamily: 'Anton'}}>
               <i className="fa fa-phone-square" aria-hidden="true"/>
             07796264489
             </ListItemContent>
           </ListItem>

           <ListItem>
             <ListItemContent style={{fontSize: '28px', fontFamily: 'Anton'}}>
               <i className="fa fa-envelope" aria-hidden="true"/>
             raffaelecastaldo881@gmail.com
             </ListItemContent>
           </ListItem>
           </List>
         </div>
        </Cell>
       </Grid>
      </div>

    )
  }
}

export default Contact;
