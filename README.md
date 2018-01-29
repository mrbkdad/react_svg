# react_svg

This project is for developing react component to help developer who want to make web/app to show some data visualization.

I was strted this project during developing web board sytem.

I used d3js technique at that system(web board system).

D3js is some difficult to use, so i decided and doing now.


Now, you can draw scatter more easier way by using this component.

below code shortly show way to use.(read Svg.js for detail information)

when you need to use it, the chart data is just only necessary thing.
first make or read data, make scale with Scale component(included) and use component.

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

