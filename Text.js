import React, { Component } from 'react';

export default class Text extends Component {
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

// rect data {x,y,text-anchor,font-size,text}
  render() {
    let texts = [];
    this.state.data.forEach((el,i)=>{
      texts.push(
        <text id={this.state.id+'_'+i} key={this.state.id+'_'+i}
          x={el.x} y={el.y}
          textAnchor={el.textAnchor}
          fontSize={el.fontSize}
          fontFamily={this.state.fontFamily}
         >{el.text}</text>
      );
    });

    return(
      <g id={this.state.id}>
        {texts}
      </g>
    );
  }
}

Text.defaultProps={
  id:'text',
  data:[],
  fontFamily:'sans-serif',
  fill:'black',
  //stroke:'black',
}
