import React from "react";
import "./SelectFile.scss";

class SelectFile extends React.Component {
  state = {
    fileContent: "",
  };

  showFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    if (file) {
      reader.onload = async (e) => {
        this.setState({
          fileContent: e.target.result,
        });
        console.log(e.target.result);
      };
      reader.readAsText(e.target.files[0]);
    }
  };

  render() {
    let { fileContent } = this.state;

    return (
      <div className="selectFile" key={"kSelect"}>
        <input type="file" onChange={(e) => this.showFile(e)} />
        <p>{fileContent}</p>
      </div>
    );
  }
}

export default SelectFile;
