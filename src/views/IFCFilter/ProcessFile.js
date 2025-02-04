import React from "react";
import "./IFCFilter.scss";

class ProcessFile extends React.Component {
  //JSX
  render() {
    let { mappingContent, ifcContent } = this.props;
    if (mappingContent !== "" && ifcContent !== "") {
      const content1 = mappingContent.split("-,,,\n")[1];
      const mappingList = content1.split("\n");
      console.log(mappingList);

      const header = ifcContent.split("DATA;\r\n")[0];
      const content2 = "DATA;\r\n" + ifcContent.split("DATA;\r\n")[1];
      const body = content2.split("ENDSEC;\r\n")[0] + "ENDSEC;";
      const footer = "\r\n" + content2.split("ENDSEC;\r\n")[1];
      const ifcList = body.split("\r\n");
      console.log(ifcList);
    }
    return <div>hello process</div>;
  }
}

export default ProcessFile;
