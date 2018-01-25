import React, { Component } from 'react';
import Scatter from './Scatter';
import Circle from './Circle';
import Rect from './Rect';
import './Svg.css';


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
      {x:200,y:50,width:50,height:50},
      {x:300,y:50,width:50,height:50}
    ]
    return (
      <svg
        id={this.state.id}
        width={this.state.width}
        height={this.state.height}
      >
      <Circle data={circleData} />
      <Rect data={rectData} />
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
