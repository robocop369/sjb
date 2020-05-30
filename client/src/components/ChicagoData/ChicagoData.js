import React from "react";
import BuildingPermitTypeBarChart from "../NEWCHICAGOCARD/BuildingPermitTypeBarChart";
import AbanBuildingsTypeBarChart from "../NEWCHICAGOCARD/AbanBuildingsTypeBarChart";
import OrdViolationsTypeBarChart from "../NEWCHICAGOCARD/OrdViolationsTypeBarChart";
import Row from "../Row";
// import API from "../../utils/API";
import ToggleButtonGroup from "../Bootstrap/ToggleButtonGroup";
import ToggleButton from "../Bootstrap/ToggleButton";



class ChicagoData extends React.Component {
    constructor(props) {
    super(props)
    this.state = {currentview:"buildingpermits"}
    
  }

  rendercontent = () => {
    if (this.state.currentview === "buildingpermits") {
      return (<BuildingPermitTypeBarChart />)
    } else if (this.state.currentview === "abandonedbuilding") {
      return (<AbanBuildingsTypeBarChart />)   
    } else if (this.state.currentview === "ordviolations") {
      return (<OrdViolationsTypeBarChart />)
    }
  
  }




  render() {
    return (
      <div>

        <h1 className="text-center">Chicago Opendata Portal</h1>

        <p className="text-center h3">Click on the arrows to browse different data sets</p>
        
        <ToggleButtonGroup
          name="Chicago_Data"
        >
          <ToggleButton onClick={()=>this.setState({currentview: "buildingpermits"})} value={'a'}>Building Permits</ToggleButton>
          <ToggleButton onClick={()=>this.setState({currentview: "abandonedbuilding"})} value={'b'}>Abandoned Building</ToggleButton>
          <ToggleButton onClick={()=>this.setState({currentview: "ordviolations"})}  value={'c'}>Ordinance Violations</ToggleButton>
        </ToggleButtonGroup>

        <Row>
          {this.rendercontent()}
        </Row>

        </div>
          
          );
          }
          }

export default ChicagoData;

