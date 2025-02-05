import React from "react";
import "./IFCFilter.scss";

class ProcessFile extends React.Component {
  //State
  state = {};

  //Event

  //JSX
  render() {
    let { mappingList, ifcList } = this.props;
    return (
      <div>
        <div>hello process</div>
        {mappingList &&
          mappingList.length > 0 &&
          ifcList &&
          ifcList.length > 0 &&
          mappingList.map((item1, index1) => {
            return (
              <div key={item1.id}>
                <input type="checkbox" id={item1.id} value={item1.revitCat} />
                {item1.revitCat}
              </div>
            );
          })}
      </div>
    );
  }
}

export default ProcessFile;
