import React, { Component } from 'react';

import LoadingScreen from "./js/pages/Loading";
import Main from "./js/pages/Main";

// Import Functions
import { connect } from "react-redux";
import {FetchData} from "./actions/data";
// Include CSS
import './App.css';

const Content = new FetchData();

class App extends Component {

  componentWillMount(){ 
      // Fetch Json Content
      Content.start(); 
    }

  render() {
    if(this.props.UI.UI_SET !== false){
      return ( <Main {... this.props}/>);
    }else{
      return( <LoadingScreen {... this.props}/> )
    }
  }
}

const mapStateToProps = (state) => ({
  UI: state.UI
})
export default connect(mapStateToProps)(App);
// export default App;