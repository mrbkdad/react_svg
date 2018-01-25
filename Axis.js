import React, { Component } from 'react';

export default class Axis extends Component {
  constructor(props){
    super(props);
    this.state={
      id:this.props.id,
      type:this.props.type,
      data:this.props.data
    };
    console.log(this.state);
  }
  //Axis data {x,y,text}
  render() {
    let ticks = [];
    this.state.data.forEach(line=>{
      var tick_position = 'translate('+line.x+','+line.y+')';
      ticks.push(
        <g class='tick'
          transform={tick_position}
        >
          <line y2='6' x2='0' />
          <text dy='.71em' y='9' x='0'
            class='axis-text'>
            {line.text}
          </text>
        </g>
      );
    });
    console.log(ticks);
    return (
      <g
        class={this.state.type}
        transform={
          this.state.type === "x"?
          "translate(0,"+ (this.props.height-this.props.pad) +")"
          :"translate("+ (this.props.width-this.props.pad) +",0)"
        }
      >{ticks}
      </g>
    );
  }
}

Axis.defaultProps={
  data:[],
  id:'Axis',
  type:'x',
  width:500,
  height:500,
  pad:20,
}
