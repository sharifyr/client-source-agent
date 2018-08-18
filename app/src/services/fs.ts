import * as redux from "redux";
import * as fs from "fs";
import {store } from "../stores/store";

import * as FileActions from "../actions/file";

const testFolder = "C:/";
export const readDir = async () => {
  console.log('fs.ts readDir()');

  await fs.readdir(testFolder, (err, files) => {
    console.log('got files ' + files);
    return store.dispatch({
      "type": FileActions.FileActionTypes.UPDATE,
      "data": files}
    );
  });
};
