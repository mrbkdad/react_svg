import React, { Component } from 'react';
import Circle from './Circle';
import Rect from './Rect';
import Axis from './Axis';
import { Scale } from './Scale';
//import './Svg.css';

class SVG extends Component {
  constructor(props){
    super(props);
    this.state={
      id:this.props.id,
      width:this.props.width,
      height:this.props.height,
    };
  }

  render() {
    let circleData = [
      {r:2,cx:50,cy:50},
      {r:5,cx:60,cy:60},
      {r:10,cx:80,cy:80},
      {r:15,cx:120,cy:120},
      {r:20,cx:170,cy:170},
      {r:30,cx:250,cy:250}
    ]
    let rectData = [
      {x:150,y:50,width:50,height:50},
      {x:200,y:50,width:50,height:50}
    ]

    let xScale = new Scale([0,300],[30,this.props.width-30]);
    let yScale = new Scale([0,300],[this.props.height-30,30]);

    circleData = circleData.map(data=>{
      return {
        r:data.r,
        cx:xScale.scale(data.cx),
        cy:yScale.scale(data.cy)
      }
    });

    rectData = rectData.map(data=>{
      return {
        x:xScale.scale(data.x),
        y:yScale.scale(data.y),
        width:data.width,
        height:data.height
      }
    });

    return (
      <svg
        id={this.state.id}
        width={this.state.width}
        height={this.state.height}
      >
      <Circle data={circleData} />
      <Rect data={rectData} />
      <Axis type="bottom" scale={xScale} />
      <Axis type="left" scale={yScale} />
      </svg>
    );
  }
}

SVG.defaultProps={
  id:'RootSVG',
  width:'500',
  height:'500',
}

export default SVG;
