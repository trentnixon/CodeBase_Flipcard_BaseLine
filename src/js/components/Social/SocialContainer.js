import React from 'react';

// Component Documentation 
// https://www.npmjs.com/package/react-share
import {
    FacebookShareButton,FacebookIcon,TwitterShareButton,TwitterIcon
  } from 'react-share';


// To DO: 
// Split each social option into components!

export default class SocialBar extends React.Component {
    componentWillMount(){}
  render() {
    return(
      <div id="SocialBar">
            <div id="socialIcons">
             <div className="icon">
                <FacebookShareButton
                    url={this.props.UI.Data.ProjectSocial.ShareUrl}
                    quote={this.props.UI.Data.ProjectSocial.ShareHeader}
                    className="Demo__some-network__share-button"
                >
                    <FacebookIcon
                        size={35}
                        round 
                    />
                </FacebookShareButton>
                </div>

                <div className="icon">
                <TwitterShareButton
                    url={this.props.UI.Data.ProjectSocial.ShareUrl}
                    title={this.props.UI.Data.ProjectSocial.ShareHeader}
                    className="Demo__some-network__share-button">
                    <TwitterIcon
                    size={35}
                    round />
                </TwitterShareButton>
                </div>
            </div>
        </div>
    )
  }
}
