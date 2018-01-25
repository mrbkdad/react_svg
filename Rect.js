import React, { Component } from 'react';

export default class Rect extends Component {
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

// rect data {x,y,width,height}
  render() {
    let rects = [];
    this.state.data.forEach((el,i)=>{
      rects.push(
        <rect id={this.state.id+'_'+i}
          x={el.x} y={el.y}
          width={el.width}
          height={el.height}
          fill={this.state.fill}
          stroke={this.state.stroke}
          stroke-width={this.state.strokeWidth}
         />
      );
    });

    return(
      <g id={this.state.id}>
        {rects}
      </g>
    );
  }
}

Rect.defaultProps={
  id:'rect',
  data:[],
  fill:'white',
  stroke:'black',
  strokeWidth:1
}
