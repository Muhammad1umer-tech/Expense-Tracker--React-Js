import React from "react";


import ChartBar from './chartBar';
import '../css/chart.css';
const Chart = (props) => {
    const dataPointvalueArray = props.dataPoints.map((dataPoint) => dataPoint.value);
    const totalMaximum = Math.max(...dataPointvalueArray);
    return(
        <div className="chart">
            {
            props.dataPoints.map((dataPoints) =>
            <ChartBar 
                key = {dataPoints.label}
                value={dataPoints.value} 
                maxValue = {totalMaximum} 
                label = {dataPoints.label}>
            </ChartBar> ) 
            }
        </div>
    );
}


export default Chart;