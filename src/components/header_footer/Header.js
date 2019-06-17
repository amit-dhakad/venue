import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from './SideDrawer';
class Header extends Component {
  state = {
    drawerOpen: false
  };

  toogleDrawer = value => {
    this.setState({ drawerOpen: value });
  };
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: '#2f2f2f',
          boxShadow: 'none',
          padding: '10px, 0px'
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">The Venue</div>
            <div className="header_logo_title">Musical Events</div>
          </div>
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => this.toogleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <SideDrawer
            open={this.state.drawerOpen}
            onClose={value => this.toogleDrawer(value)}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
