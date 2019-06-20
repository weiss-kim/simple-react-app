import React, { Component } from 'react'
import * as d3 from 'd3'
import { LineChart } from 'react-d3-components'

// Be careful, months are 0-indexed when using new Date(year,month,day)
// 0 - January, 1 - February, ...., 11 - December

var data = [
    {
        label: 'Review Count by Month (Demo)',
        values: [
            {x: new Date(2018, 0), y: 50}, {x: new Date(2018, 1), y: 110},
            {x: new Date(2018, 2), y: 140}, {x: new Date(2018, 3), y: 230},
            {x: new Date(2018, 4), y: 270}, {x: new Date(2018, 5), y: 330},
            {x: new Date(2018,6), y: 320}, {x: new Date(2018,7), y: 410},
            {x: new Date(2018,8), y: 490}, {x: new Date(2018,9), y: 530},
            {x: new Date(2018,10), y: 510}, {x: new Date(2018,11), y: 680},
            {x: new Date(2019, 0), y: 550}, {x: new Date(2019, 1), y: 510},
            {x: new Date(2019, 2), y: 640}, {x: new Date(2019, 3), y: 630},
            {x: new Date(2019, 4), y: 770}, {x: new Date(2019, 5), y: 730},
            {x: new Date(2019, 6), y: 820}, {x: new Date(2019, 7), y: 810},
            {x: new Date(2019, 8), y: 990}, {x: new Date(2019, 9), y: 1250},
            {x: new Date(2019, 10), y: 1810}, {x: new Date(2019, 11), y: 2480},
        ]
    }
];

// Margin width and height set for outer dimensions for 800x400
const margin = {top: 10, bottom: 50, left: 50, right: 10}
const width = 800 - margin.left - margin.right
const height = 500 - margin.top - margin.bottom

// Create time series scale using d3 for date range from 01/01/18 to 12/31/19
// The range property sets width of scale at 50 pixels less than total graph (for better fit)
const xScale = d3.time.scale().domain([new Date(2018, 0, 1), new Date(2019, 11, 31)]).range([0, width-50])

// Create a tick mark for every 2 months on the xScale formatted like 01/18
const xAxis = { tickValues: xScale.ticks(d3.time.month, 2), tickFormat: d3.time.format("%m/%y") }

class ReviewsLineChart extends Component {
    render(){
        return (
            <div>
                <h2>{data[0].label}</h2>
                <LineChart
                    data={data}
                    xScale={xScale}
                    xAxis={xAxis}
                    width={width}
                    height={height}
                    margin={margin}/>
            </div>
        )
    }
}

export default ReviewsLineChart
