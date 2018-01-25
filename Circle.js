import React, { Component } from 'react';

export default class Circle extends Component{
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

  // circle data{r,cx,cy}
  render(){
    let circles = [];
    this.state.data.forEach((el,i)=>{
      circles.push(
        <circle id={this.state.id+'_'+i}
          r={el.r} cx={el.cx} cy={el.cy}
          fill={this.state.fill}
          stroke={this.state.stroke}
          stroke-width={this.state.strokeWidth}
         />
      );
    });

    return(
      <g id={this.state.id}>
        {circles}
      </g>
    );
  }
}

Circle.defaultProps={
  id:'circle',
  data:[],
  fill:'white',
  stroke:'black',
  strokeWidth:1
}
