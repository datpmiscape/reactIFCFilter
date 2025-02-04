import React from "react";
import "./IFCFilter.scss";
import SelectFile from "./SelectFile";
import ProcessFile from "./ProcessFile";

class IFCFilter extends React.Component {
  //State
  state = {
    mappingContent: "",
    ifcContent: "",
  };

  //Event
  copyMappingData = (mappingContent) => {
    this.setState({
      mappingContent: mappingContent,
    });
  };
  copyIFCData = (ifcContent) => {
    this.setState({
      ifcContent: ifcContent,
    });
  };

  //JSX
  render() {
    return (
      <div>
        <SelectFile
          copyMappingData={this.copyMappingData}
          copyIFCData={this.copyIFCData}
        />
        <ProcessFile
          mappingContent={this.state.mappingContent}
          ifcContent={this.state.ifcContent}
        />
      </div>
    );
  }
}

export default IFCFilter;
