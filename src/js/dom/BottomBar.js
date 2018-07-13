import React from 'react';
import SocialContainer from "../components/Social/SocialContainer";

// React component for the front side of the card
export default class BottomNavBar extends React.Component {

  render() {
    return(
      <div id="BottomBar">
                <SocialContainer {... this.props}/>
        </div>
    )
  }
}
