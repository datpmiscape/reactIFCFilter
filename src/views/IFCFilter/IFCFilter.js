import React from "react";
import "./IFCFilter.scss";
import SelectFile from "./SelectFile";
import ProcessFile from "./ProcessFile";

class IFCFilter extends React.Component {
  //State
  state = {
    mappingList: [],
    ifcHeader: "",
    ifcFooter: "",
    ifcList: [],
  };

  //Event
  copyMappingList = (mappingList) => {
    this.setState({
      mappingList: mappingList,
    });
  };
  copyIFCData = (ifcHeader, ifcFooter, ifcList) => {
    this.setState({
      ifcHeader: ifcHeader,
      ifcFooter: ifcFooter,
      ifcList: ifcList,
    });
  };

  //JSX
  render() {
    return (
      <div>
        <SelectFile
          copyMappingList={this.copyMappingList}
          copyIFCData={this.copyIFCData}
        />
        <ProcessFile
          mappingList={this.state.mappingList}
          ifcList={this.state.ifcList}
        />
      </div>
    );
  }
}

export default IFCFilter;
