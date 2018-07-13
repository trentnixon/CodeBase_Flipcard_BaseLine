import React from 'react';

export default class Card extends React.Component {

  componentWillMount(){ }

  render() {
    return(
       <div>
            <h2>{this.props.content.header}</h2>
            <h3>{this.props.content.subheader}</h3>
            <p dangerouslySetInnerHTML={ { __html: this.props.content.copy} }></p>
        </div>
    )
  }
}
