import React, { Component } from 'react';
import Line from './Line';
import Text from './Text';

export default class Axis extends Component {
  constructor(props){
    super(props);
    this.state={
      id:this.props.id,
      type:this.props.type,
      scale:this.props.scale
    };
    //console.log(this.state.scale.ticks(this.state.type));
  }
  //Axis data {x,y,text}
  render() {
    let tick_data = this.state.scale.ticks(this.state.type);
    let lines = [];
    let texts = [];
    tick_data.forEach((tick,i)=>{
      lines.push(
          {
            x1:tick.line.x1, y1:tick.line.y1,
            x2:tick.line.x2, y2:tick.line.y2
          }
        );
      texts.push(
          {
            x:tick.text.x, y:tick.text.y,
            textAnchor:tick.text.textAnchor,
            fontSize:"10", text:tick.tick
          }
      );
    });
    //console.log(ticks);
    return (
      <g id={'axis_' + this.state.type}>
        <Line id={'axis_'+this.state.type+'_line'}
              data={lines} stroke='black' />
        <Text id={'axis_'+this.state.type+'_text'}
              data={texts} />
          />
      </g>
    );
  }
}

Axis.defaultProps={
  id:'Axis',
  scale:[],
  type:'x',
}
