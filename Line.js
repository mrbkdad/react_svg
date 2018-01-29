import React, { Component } from 'react';

export default class Line extends Component {
  constructor(props){
    super(props);
    this.state={
      id:this.props.id,
      data:this.props.data,
      fill:this.props.fill,
      stroke:this.props.stroke,
      strokeWidth:this.props.strokeWidth
    };
  }

// rect data {x1,y1,x2,y2}
  render() {
    let lines = [];
    this.state.data.forEach((el,i)=>{
      lines.push(
        <line id={this.state.id+'_'+i} key={this.state.id+'_'+i}
          x1={el.x1} y1={el.y1}
          x2={el.x2} y2={el.y2}
          fill={this.state.fill}
          stroke={this.state.stroke}
          strokeWidth={this.state.strokeWidth}
         />
      );
    });

    return(
      <g id={this.state.id}>
        {lines}
      </g>
    );
  }
}

Line.defaultProps={
  id:'line',
  data:[],
  fill:'white',
  stroke:'black',
  strokeWidth:1
}
