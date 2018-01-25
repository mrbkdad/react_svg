import React, { Component } from 'react';
import Axis from './Axis';
import Circle from './Circle'

class Scatter extends Component {
  constructor(props){
    super(props);
    this.state={
      id:this.props.id,
      data:this.props.data
    };
  }
  //scatter data {r,cx,cy}
  render() {
    let axis = [
      {x:10,y:0,text:'10'},
      {x:50,y:0,text:'20'},
      {x:100,y:0,text:'30'},
    ];
    return (
      <g id={this.state.id}>
        <Axis data={axis} />
          <Circle id='circle'
            data={this.state.data}
            fill='blue'
          />
      </g>
    );
  }
}

Scatter.defaultProps={
  data:[],
  id:'RootSVG',
  width:'500',
  height:'500',
}

export default Scatter;
