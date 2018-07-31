import * as redux from "redux";
import * as path from "path";

import * as FileActions from "../actions/file";
import Logger from "../utils/logger";
import * as Store from "../stores/store";

const logger = Logger(path.basename(__filename));

function fileReducer(state: string[] = [], action: FileActions.FileActions): string[] {
  console.log("reducer action :" + action.data);
  switch (action.type) {
    case FileActions.FileActionTypes.UPDATE:
      const toggledState = action.data;
      return toggledState;
  }

  return state;
}

const statePropertyToReducerMap = {
  "files": (fileReducer as redux.Reducer<string[]>)
};

export const reducers = redux.combineReducers<Store.IAppState>(statePropertyToReducerMap);
