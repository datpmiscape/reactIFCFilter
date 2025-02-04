import React from "react";
import "./IFCFilter.scss";
import * as XLSX from "xlsx";

class SelectFile extends React.Component {
  //State
  state = {
    mappingContent: "",
    ifcContent: "",
  };

  //Event
  handleSelectMappingFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];

    if (file) {
      reader.onload = (e) => {
        const bstr = e.target.result;
        const wb = XLSX.read(bstr, { type: "binary" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
        this.setState({
          mappingContent: data,
        });
        // console.log(data);
        this.props.copyMappingData(data);
      };
      reader.readAsBinaryString(file);
    } else {
      this.setState({
        mappingContent: "",
      });
      this.props.copyMappingData("");
    }
  };

  handleSelectIFCFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    if (file) {
      reader.onload = async (e) => {
        const data = e.target.result;
        this.setState({
          ifcContent: data,
        });
        // console.log(data);
        this.props.copyIFCData(data);
      };
      reader.readAsText(e.target.files[0]);
    } else {
      this.setState({
        ifcContent: "",
      });
      this.props.copyIFCData("");
    }
  };

  //JSX
  render() {
    return (
      <div className="selectFile" key={"kSelectFile"}>
        <div>
          <span>Select a mapping file: </span>
          <input
            type="file"
            onChange={(e) => this.handleSelectMappingFile(e)}
          />
        </div>
        <div>
          <span>Select an IFC file: </span>
          <input type="file" onChange={(e) => this.handleSelectIFCFile(e)} />
        </div>
      </div>
    );
  }
}

export default SelectFile;
