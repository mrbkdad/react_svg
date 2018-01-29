import React, { Component } from 'react';
import Circle from './Circle';
import Axis from './Axis';
import Line from './Line';

class Scatter extends Component {
  constructor(props){
    super(props);
    this.state={
      id:this.props.id,
      r:this.props.r,
      fill:this.props.fill,
      stroke:this.props.stroke,
      data:this.props.data,
      xScale:this.props.xScale,
      yScale:this.props.yScale,
      isLine:this.props.isLine
    };
  }

  render() {
    let circleData = [];
    let lineData = [];

    circleData = this.state.data.map((d,i)=>{
      return {
        r:this.state.r,
        cx:this.state.xScale.scale(d.x),
        cy:this.state.yScale.scale(d.y)
      };
    });
    lineData = this.state.data.slice(1).map((d,i)=>{
      return{
        x1:this.state.xScale.scale(this.state.data[i].x),
        y1:this.state.yScale.scale(this.state.data[i].y),
        x2:this.state.xScale.scale(this.state.data[i+1].x),
        y2:this.state.yScale.scale(this.state.data[i+1].y)
      };
    });
    let scatterLine = "";
    if(this.state.isLine){
      scatterLine = (<Line id={this.state.id+"_line"} data={lineData} />);
    }
    return (
      <g id={this.state.id}>
        <Circle data={circleData}
          fill={this.state.fill} stroke={this.state.stroke}/>
        <Line id="x_axis"
          data={this.state.xScale.axis("bottom",this.state.xScale,this.state.yScale)} />
        <Line id="y_axis"
          data={this.state.xScale.axis("left",this.state.xScale,this.state.yScale)} />
        <Axis type="bottom" scale={this.state.xScale} />
        <Axis type="left" scale={this.state.yScale} />
        {scatterLine}
      </g>
    );
  }
}

Scatter.defaultProps={
  id:'scatter',
  r:'1',
  fill:'black',
  stroke:'black',
  data:[],
  width:'500',
  height:'500',
  isLine:false
}

export default Scatter;
