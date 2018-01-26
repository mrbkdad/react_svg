import React, { Component } from 'react';

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
    let ticks = [];
    tick_data.forEach((tick,i)=>{
      ticks.push(
        <g id={'tick_'+i} key={'tick_'+i}>
          <line id={'line_'+tick.tick} key={'line_'+tick.tick}
            x1={tick.line.x1} y1={tick.line.y1}
            x2={tick.line.x2} y2={tick.line.y2} stroke='black'/>
          <text id={'text_'+tick.tick} key={'text_'+tick.tick}
            x={tick.text.x} y={tick.text.y}
            textAnchor={tick.text.textAnchor}
            fontSize="10" forntFamily="sans-serif">
            {tick.tick}
          </text>
        </g>
      );
    });
    //console.log(ticks);
    return (
      <g id={'axis_' + this.state.type}>
        {ticks}
      </g>
    );
  }
}

Axis.defaultProps={
  id:'Axis',
  scale:[],
  type:'x',
}
