import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import API from "../../utils/API";
// import { response } from 'express';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

// API.findAllBuildingPermits().then(response=>console.log(response))
 
class BuildingPermitTypeBarChart extends Component {
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
		API.findAllBuildingPermits()
		  .then(res => {
			const permObject = res.data;
			this.setState({ dataPoints: permObject });
			console.log("this is in component did mount", permObject)
		  })
		  }

 	render() {
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Types of Building Permits Issued"
			},
			axisX: {
				title: " ",
				reversed: true,
			},
			axisY: {
				title: "Amount of Permits Issued",
				labelFormatter: this.addSymbols
			},
			data: [{
				type: "bar",
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

export default BuildingPermitTypeBarChart;