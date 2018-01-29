var d3 = require('d3');

class Scale {
  scaleLinear:Object;
  domainData:Array;
  rangeData:Array;
  constructor(domain:Array=[1,100],range:Array=[0,500]){
    this.domainData = d3.extent(domain.map(d=>{return parseFloat(d);}));
    this.rangeData = range;
    this.scaleLinear = d3.scaleLinear().domain(this.domainData).range(range);
  }

  scale(x){
    return this.scaleLinear(parseFloat(x));
  }
  domain(){
    return this.domainData;
  }
  range(){
    return this.rangeData;
  }
  // return line position
  axis(type,xScale,yScale){
    type = type || "bottom";
    let xRange = xScale.range();
    let yRange = yScale.range();
    let position = [];
    if(type==="bottom"){
      position.push({
        x1:xRange[0],
        y1:yRange[0],
        x2:xRange[1],
        y2:yRange[0],
      });
    }else if(type==="top"){
      position.push({
        x1:xRange[0],
        y1:yRange[1],
        x2:xRange[1],
        y2:yRange[1],
      });
    }else if(type==="left"){
      position.push({
        x1:xRange[0],
        y1:yRange[0],
        x2:xRange[0],
        y2:yRange[1],
      });
    }else if(type==="right"){
      position.push({
        x1:xRange[1],
        y1:yRange[0],
        x2:xRange[1],
        y2:yRange[1],
      });
    }
    return position;
  }

  ticks(type){
    type = type || "bottom";
    //console.log(d3.axisTop(this.scaleLinear).scale().ticks());

    let tick_data = [{tick:"",position:{x1:0,y1:0,x2:0,y2:0}}];
    let tick_size = 5;
    let text_pad = 3;
    if(type==="top"){
      let axis = d3.axisTop(this.scaleLinear).scale();
      let tvs = axis.ticks();
      let y1 = axis.range()[1];
      let y2 = y1 - tick_size;
      tick_data = tvs.map(tv=>{
        return {
          tick:tv,
          line:{x1:this.scale(tv),y1:y1,
                    x2:this.scale(tv),y2:y2},
          text:{x:this.scale(tv),y:y2-text_pad,textAnchor:"middle"}
        };
      });
    }else if(type==="bottom"){
      let axis = d3.axisBottom(this.scaleLinear).scale();
      let tvs = axis.ticks();
      let y1 = axis.range()[1];
      let y2 = y1 + tick_size;
      tick_data = tvs.map(tv=>{
        return {
          tick:tv,
          line:{x1:this.scale(tv),y1:y1,
                    x2:this.scale(tv),y2:y2},
          text:{x:this.scale(tv),y:y2+3*text_pad,textAnchor:"middle"}
        };
      });
    }else if(type==="right"){
      let axis = d3.axisRight(this.scaleLinear).scale();
      let tvs = axis.ticks();
      let x1 = axis.range()[1];
      let x2 = x1 + tick_size;
      tick_data = tvs.map(tv=>{
        return {
          tick:tv,
          line:{x1:x1,y1:this.scale(tv),
                    x2:x2,y2:this.scale(tv)},
          text:{x:x2+text_pad,y:this.scale(tv)+text_pad,textAnchor:"start"}
        };
      });
    }else if(type==="left"){
      let axis = d3.axisRight(this.scaleLinear).scale();
      let tvs = axis.ticks();
      let x1 = axis.range()[1];
      let x2 = x1 - tick_size;
      tick_data = tvs.map(tv=>{
        return {
          tick:tv,
          line:{x1:x1,y1:this.scale(tv),
                    x2:x2,y2:this.scale(tv)},
          text:{x:x2-text_pad,y:this.scale(tv)+text_pad,textAnchor:"end"}
        };
      });
    }

    return tick_data;
  }
}

export { Scale };
