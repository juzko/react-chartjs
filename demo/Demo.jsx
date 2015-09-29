'use strict';
var React = require('react');
var Chartjs = require('chart.js');
var BarChart = require('../lib/bar.js');
var DoughnutChart = require('../lib/doughnut.js');
var LineChart = require('../lib/line.js');
var PieChart = require('../lib/pie.js');
var PolarAreaChart = require('../lib/polar-area.js');
var RadarChart = require('../lib/radar.js');

var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
var barChartData = {
    labels : ["January","February","March","April","May","June","July"],
    datasets : [
        {
            fillColor : "rgba(220,220,220,0.5)",
            strokeColor : "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        },
        {
            fillColor : "rgba(151,187,205,0.5)",
            strokeColor : "rgba(151,187,205,0.8)",
            highlightFill : "rgba(151,187,205,0.75)",
            highlightStroke : "rgba(151,187,205,1)",
            data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        }
    ]
};
var doughnutData = {
    datasets: [{
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
        ],
        backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",
        ],
    }, {
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
        ],
        backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",
        ],
    }, {
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
        ],
        backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",
        ],
    }],
    labels: [
        "Red",
        "Green",
        "Yellow",
        "Grey",
        "Dark Grey"
    ]
};
var lineChartData = {
            labels : ["January","February","March","April","May","June","July"],
            datasets : [
                {
                    label: "My First dataset",
                    fillColor : "rgba(220,220,220,0.2)",
                    strokeColor : "rgba(220,220,220,1)",
                    pointColor : "rgba(220,220,220,1)",
                    pointStrokeColor : "#fff",
                    pointHighlightFill : "#fff",
                    pointHighlightStroke : "rgba(220,220,220,1)",
                    data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
                },
                {
                    label: "My Second dataset",
                    fillColor : "rgba(151,187,205,0.2)",
                    strokeColor : "rgba(151,187,205,1)",
                    pointColor : "rgba(151,187,205,1)",
                    pointStrokeColor : "#fff",
                    pointHighlightFill : "#fff",
                    pointHighlightStroke : "rgba(151,187,205,1)",
                    data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
                }
            ]
        }
var pieData = {
    datasets: [{
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
        ],
        backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",
        ],
    }, {
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
        ],
        backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",
        ],
    }, {
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
        ],
        backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",
        ],
    }],
    labels: [
        "Red",
        "Green",
        "Yellow",
        "Grey",
        "Dark Grey"
    ]
}; 
var polarData = {
    datasets: [{
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
        ],
        backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",
        ],
    }],
    labels: [
        "Red",
        "Green",
        "Yellow",
        "Grey",
        "Dark Grey"
    ]
};
var radarChartData = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: "rgba(220,220,220,0.2)",
                pointBackgroundColor: "rgba(220,220,220,1)",
                data: [null, randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            }, {
                label: "My Second dataset",
                backgroundColor: "rgba(151,187,205,0.2)",
                pointBackgroundColor: "rgba(151,187,205,1)",
                hoverPointBackgroundColor: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [null, randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            }]
        };
var Demo = React.createClass({
    render: function render() {
        return (
            <div>
                <PolarAreaChart
                    type="polarArea"
                    data={polarData}
                    options={{
                        responsive: false,
                        width:200,
                        height:200
                    }}
                />
                <RadarChart
                    type="radar"
                    data={radarChartData}
                    options={{
                        responsive: false,
                        width:200,
                        height:200,
                        scale: {
                            beginAtZero: true,
                            reverse: false
                        }
                    }}
                />
               <BarChart
                    type="bar"
                    data={barChartData}
                    options={{
                        responsive: false,
                        width:450,
                        height:100
                    }}
                />
                <DoughnutChart
                    type="doughnut"
                    data={doughnutData}
                    options={{
                        responsive: false,
                        width:200,
                        height:200
                    }}
                />
                <PieChart
                    type="pie"
                    data={pieData}
                    options={{
                        responsive: false,
                        width:200,
                        height:200
                    }}
                />
           </div>
        );
    }
});

React.render(
    <Demo/>,
    document.getElementById("container")
);
