import React, { Component } from 'react';
// Import Layout Components
import Header from "../dom/Header";
import BottomBar from "../dom/BottomBar";
import FlipCards from "../dom/flipcard";

// Use this component to build up the Project Layout
export default class Main extends Component {
  render() {
    return (
        <div className="container-fluid" id="Glabs">
            <Header     {... this.props} />
            <FlipCards  {... this.props} />   
            <BottomBar  {... this.props} />
        </div>
        ) 
  }
}
