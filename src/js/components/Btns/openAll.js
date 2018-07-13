import React from 'react';
import Button from '@material-ui/core/Button';

import { openall } from "../../../actions/actions";

export default class Card extends React.Component {

    openAll(){ openall(true);}

    render() {
        return(
            <Button 
                variant="fab" 
                className="OpenAll" 
                onClick={this.openAll.bind(this)} 
            > 
                
                <i className="material-icons"> rotate_90_degrees_ccw </i>
            </Button>
      )
  }
}