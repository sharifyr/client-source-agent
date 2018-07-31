import * as redux from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "react-router-redux";

import * as Reducers from "../reducers/reducer";
import { IUserSerialized } from "../models/IUserSerialized";

export interface ILoginFormData {
  "username": string;
  "password": string;
}

export interface IAppState {

  "files": string[];
}

export interface IUserData {
  "currentUserId": number;
  "auth": string;
  "users": IUserSerialized[];
}

export const initialState: IAppState = {
  "files": []
};

export const history = createBrowserHistory();
const historyMiddleware = routerMiddleware(history);

export const store: redux.Store<IAppState> = redux.createStore(
  Reducers.reducers,
  initialState,
  composeWithDevTools((redux.applyMiddleware(thunk, historyMiddleware)))
);
