import React, { Component } from 'react';
import CanvasJSReact from '../../../../assets/canvasjs.react';
import API from "../../../../utils/API";
// import { response } from 'express';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

 
class AbanBuildingsTypeBarChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  error: null,
		  isLoaded: false
		};
	  }

	addSymbols(e){
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}

	componentDidMount() {
		this.setState({isLoaded:true})
		API.findAllAbanBuildings()
		  .then(res => {
			const ABObject = res.data;
			this.setState({ dataPoints: ABObject });
			console.log("this is in component did mount", ABObject)
		  })
		  }

 	render() {
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Any People Using Property - Homeless/Childen/Gangs"
			},
			axisX: {
				title: "Reported Findings",
				reversed: true,
			},
			axisY: {
				title: "Count",
				labelFormatter: this.addSymbols
			},
			data: [{
				type: "column",
				dataPoints:  this.state.dataPoints
			}]
		}
		console.log("this is my options", options)
		// API.findAllBuildingPermits().then(response=>console.log(response))
		return (
		<div>
			{/* <h1>React Bar Chart</h1> */}
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
		
	}
	
}

export default AbanBuildingsTypeBarChart;
