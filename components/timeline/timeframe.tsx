import React from "react";
import {select} from "d3-selection";
import {NumberValue, ScaleTime, scaleTime} from "d3-scale";
import {Axis, axisBottom} from "d3-axis";
import {timeFormat} from "d3-time-format";

type TimeFrameProps = {
    startDate: Date,
    endDate: Date
}

type TimeFrameState = {

}

class TimeFrame extends React.Component<TimeFrameProps,TimeFrameState>{
    
    constructor(props: TimeFrameProps){
        super(props);

        this.drawAxis = this.drawAxis.bind(this);
    }

    componentDidMount(): void{
        this.drawAxis();
    }

    drawAxis() : void{
        const frameEle = select("#timeFrame")
            .append("svg")
            .attr("width", 1800)
            .attr("height",100);

        const scale : ScaleTime<number,number> = scaleTime()
            .domain([this.props.startDate, this.props.endDate])
            .range([0,1260])
            .nice();

        const axis: Axis<Date|NumberValue> = axisBottom(scale)
            //.tickFormat(timeFormat(""));

        frameEle.append("g")
            .attr("transform", "translate(285)")
            .call(axis);
    }

    render() : React.ReactNode{
        return <div id="timeFrame">
            <p>!</p>
        </div>
    }
}

export default TimeFrame;