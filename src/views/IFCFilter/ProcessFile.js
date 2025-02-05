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
        {/* {mappingList &&
          mappingList.length > 0 &&
          mappingList.map((item, index) => {
            return (
              <div>
                <label>
                  <input type="checkbox" id="cb1" value={"cat1"} />
                  cat1
                </label>
              </div>
            );
          })} */}
      </div>
    );
  }
}

export default ProcessFile;
