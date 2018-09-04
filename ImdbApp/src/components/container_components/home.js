/**
 * This will be the main container from all the app
 * And will be used as a bridge between our internal 
 * components
 */


import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return this.props.children;
  }
}
