import React, { Component } from 'react';
import Navbar_item from './Navbar_item';

export class Navbar extends Component {

  render() {
    return(
        <div className="Navbar">
          <Navbar_item item_name="Analytics"/>
          <Navbar_item item_name="AI & Machine Learning"/>
          <Navbar_item item_name="NLP"/>
          <Navbar_item item_name="iOS & Android"/>
        </div>
    )
  }
}
export default Navbar