import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';


let styles = {
  footer: {
    display: 'flex',
    backgroundColor: 'lightgrey',
    width: '100%',
    paddingLeft: '20%',
    paddingRight: '20%',
    paddingTop: '15px',
    paddingBottom: '25px'
  }
}

const Footer = () => (
  <Paper style={styles.footer} zDepth={3} >
    <div className="footer-col">
      <List>
        <Subheader> Financial </Subheader>
        <a target="_blank" href="https://www.expensify.com/signin"> < ListItem innerDivStyle={{paddingTop: '8px', paddingBottom: '8px'}} primaryText={"Expensify"} /> </a>
        <a target="_blank" href="https://my.vanguardplan.com/"> < ListItem innerDivStyle={{paddingTop: '8px', paddingBottom: '8px'}} primaryText={"Vanguard"} /> </a>
      </List>
    </div>
    <div className="footer-col">
      <List>
        <Subheader> Directories </Subheader>
        <a target="_blank" href="https://factual.namely.com/"> < ListItem innerDivStyle={{paddingTop: '8px', paddingBottom: '8px'}} primaryText={"Namely"} /> </a>
        <a target="_blank" href="http://wiki.corp.factual.com/"> < ListItem innerDivStyle={{paddingTop: '8px', paddingBottom: '8px'}} primaryText={"Confluence"} /> </a>     
      </List>
    </div>
    <div className="footer-col">
      <List>
        <Subheader> Marathon? </Subheader>
        <a target="_blank" href="http://marathon.la.prod.factual.com/ui/"> < ListItem innerDivStyle={{paddingTop: '8px', paddingBottom: '8px'}} primaryText={"Marathon"} /> </a>
      </List>
    </div>
    <div className="footer-col">
      <List>
        <Subheader> Job Trackers </Subheader>
        <a target="_blank" href="http://jobtracker-dev.la.prod.factual.com:19888/jobhistory"> < ListItem innerDivStyle={{paddingTop: '8px', paddingBottom: '8px'}} primaryText={"Job History"} /> </a>
        <a target="_blank" href="http://vineyard.prod.factual.com/"> < ListItem innerDivStyle={{paddingTop: '8px', paddingBottom: '8px'}} primaryText={"Vineyard"} /> </a>       
        <a target="_blank" href="http://jobtracker-dev.la.prod.factual.com:8088/cluster"> < ListItem innerDivStyle={{paddingTop: '8px', paddingBottom: '8px'}} primaryText={"Job Tracker"} /> </a>
      </List>
    </div>
    <div className="footer-col">
      <List>
        <Subheader> Data </Subheader>
        <a target="_blank" href="http://mesos.la.prod.factual.com/"> < ListItem innerDivStyle={{paddingTop: '8px', paddingBottom: '8px'}} primaryText={"Mesos"} /> </a>
        <a target="_blank" href="http://dashboard.prod.factual.com/"> < ListItem innerDivStyle={{paddingTop: '8px', paddingBottom: '8px'}} primaryText={"Dashboard"} /> </a>      
        <a target="_blank" href="http://stitch.corp.factual.com/"> < ListItem innerDivStyle={{paddingTop: '8px', paddingBottom: '8px'}} primaryText={"Stitch"} /> </a>
      </List>
    </div>
  </Paper>
)

export default Footer