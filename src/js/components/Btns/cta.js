import React from 'react';
import Button from '@material-ui/core/Button';

export default class Card extends React.Component {
  render() {
   
    if(this.props.cta !== undefined){
      return(
          <div className="col-12 text-center" id="CTA">
            <Button variant="outlined" href={this.props.cta.location} className="Button_Action_CTA" > {this.props.cta.Label}  </Button>
          </div>
      )
    }
    else{
      return(<div></div>)
    }
  }
}
