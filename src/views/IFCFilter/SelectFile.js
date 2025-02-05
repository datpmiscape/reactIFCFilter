import React from "react";
import "./IFCFilter.scss";
import * as XLSX from "xlsx";

class SelectFile extends React.Component {
  //State

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
        const content1 = data.split("-,,,\n")[1];
        const mappingLst = content1.split("\n");
        let currentMappingList = [];
        for (var i = 0; i <= mappingLst.length - 1; i++) {
          let mapping = {
            id: "m" + (i + 1),
            ifcCat: mappingLst[i].split(",")[0],
            ifcType: mappingLst[i].split(",")[1],
            revitCat: mappingLst[i].split(",")[2],
          };
          currentMappingList.push(mapping);
        }
        this.props.copyMappingList(currentMappingList);
      };
      reader.readAsBinaryString(file);
    } else {
      this.props.copyMappingList([]);
    }
  };

  handleSelectIFCFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    if (file) {
      reader.onload = async (e) => {
        const data = e.target.result;
        const header = data.split("DATA;\r\n")[0];
        const content2 = "DATA;\r\n" + data.split("DATA;\r\n")[1];
        const body = content2.split("ENDSEC;\r\n")[0] + "ENDSEC;";
        const footer = "\r\n" + content2.split("ENDSEC;\r\n")[1];
        const ifcList = body.split("\r\n");
        this.props.copyIFCData(header, footer, ifcList);
      };
      reader.readAsText(e.target.files[0]);
    } else {
      this.props.copyIFCData("", "", []);
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
