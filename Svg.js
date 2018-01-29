import React, { Component } from 'react';
import Scatter from './Scatter';
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
    let xScale = new Scale([0,300],[30,this.props.width-30]);
    let yScale = new Scale([0,300],[this.props.height-30,30]);

    let sinData = [];
    let cosData = [];
    let xvalues = Array.from([...Array(30).keys()]);
    sinData = xvalues.map(x=>{
      return {
        x:x*10,
        y:150+parseInt(100*Math.sin(Math.PI*(x/10)))
      }
    });
    cosData = xvalues.map(x=>{
      return {
        x:x*10,
        y:150+parseInt(100*Math.cos(Math.PI*(x/10)))
      }
    });

    return (
      <div>
        <svg
          id={this.state.id}
          width={this.state.width}
          height={this.state.height}
        >
          <Scatter
            id="scatter"
            r="3"
            data={sinData}
            xScale={xScale}
            yScale={yScale}
            isLine="true"
            />
          <Scatter
            id="scatter"
            r="3"
            fill="red"
            stroke="red"
            data={cosData}
            xScale={xScale}
            yScale={yScale}
            />
        </svg>
      </div>

    );
  }
}

SVG.defaultProps={
  id:'RootSVG',
  width:'500',
  height:'500',
}

export default SVG;
