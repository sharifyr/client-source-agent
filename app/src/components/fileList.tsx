import * as React from "react";
import * as path from "path";
import { connect } from "react-redux";

import * as FileListService from "../services/fs";

import { IAppState, store } from "../stores/store";

interface IStateProps {
  "files": string[];
}
FileListService.readDir();
const mapStateToProps = (state: IAppState, props: {}): IStateProps => {

  return {
    "files": state.files
  };
};

const Component = (props: IStateProps) => {
  console.log('fileList.tsx loaded');
  return (
    <div className={"fileList"}>
      {props.files.map((f) => <div><span>{f}</span></div>)}
    </div>
  );
};

export default connect(mapStateToProps)(Component);
