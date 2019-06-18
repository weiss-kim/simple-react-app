import React, { Component } from 'react'
import { PieChart } from 'react-d3-components'

var data = {
    label: 'Review Count by Score (Demo)',
    values: [{x: '5 stars', y: 34}, {x: '4 stars', y: 21}, {x: '3 stars', y: 13}, {x: '2 stars', y: 8}, {x: '1 star', y: 5} ]
};

var sort = null; // d3.ascending, d3.descending, func(a,b) { return a - b; }, etc...

class ReviewsPieChart extends Component {
    render(){
        return (
            <PieChart
                data={data}
                width={600}
                height={400}
                margin={{top: 10, bottom: 10, left: 100, right: 100}}
                sort={sort}
            />
        )
    }
}

export default ReviewsPieChart
