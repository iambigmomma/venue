import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import {scroller} from 'react-scroll';



const SideDrawer = (props) => {
    const scrollToElement = (element) =>{
      scroller.scrollTo(element,{
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: -120
      });
      props.onClose(false)

    }
    return (
            <Drawer
                anchor="right"
                open={props.open}
                onClose={() => props.onClose(false)}
            >
            <List component="nav" onClick={() => console.log("here is the sidebar item!")}>
              <ListItem button onClick={() => scrollToElement("about")}>
                  About
              </ListItem>
              <ListItem button onClick={() => scrollToElement("information")}>
                  Information
              </ListItem>
              <ListItem button onClick={() => scrollToElement("highlight")}>
                  Highlight
              </ListItem>
              <ListItem button onClick={() => scrollToElement("pricing")}>
                  Pricing
              </ListItem>
              <ListItem button onClick={() => scrollToElement("location")}>
                  Location
              </ListItem>
              
            
          
            </List>
                
            </Drawer>
    );
};

export default SideDrawer;
