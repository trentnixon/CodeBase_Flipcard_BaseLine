import React from 'react';
import CardBasicLayout from "./Card_Layout_Basic";
import { openall } from "../../../actions/actions";
import {Animated} from "react-animated-css";

let FlipState ='front';
// React component for the card (main component)
export default class Card extends React.Component {

  // eslint-disable-next-line   
  constructor(props) { 
    super(props); 
    this.state = {flip: false};
    this.flipMe = this.flipMe.bind(this);
  }

  componentWillMount(){ }
  shouldComponentUpdate(nextProps, nextState){ return true;}
  componentWillUpdate(nextProps, nextState){ 
    if(nextProps.UI.SETFLIP === true){
        // Set UI to False      
        openall(false)
        if(nextProps.UI.FLIPSTATE === false){ this.SetNewState(false,'front')}
        else if(nextProps.UI.FLIPSTATE === true){ this.SetNewState(true,'back')}
    }
  }
 
  SetNewState(state,NewClass){
    this.setState({ flip: state });
    FlipState = NewClass;
  } 

  flipMe(){
      if(this.state.flip === false){ this.SetNewState(true,'back')}
      else{ this.SetNewState(false,'front')}
   }

  render() {
    return(
        <Animated animationIn="zoomIn" animationOut="fadeInUp" animationInDelay={this.props.delay} isVisible={true}>
            <div className={'card-container ' + FlipState}>
                <div className='card-body'>
                    <CardBasicLayout 
                        card={this.props.card.back}
                        onChange={this.flipMe}
                        SideClass="side-back"
                        FlipIcon="cached"
                    />
                    <CardBasicLayout 
                        card={this.props.card.front}
                        onChange={this.flipMe}
                        SideClass="side-front"
                        FlipIcon="cached"
                    />
                </div>
            </div>
        </Animated>
    )
  }
}
