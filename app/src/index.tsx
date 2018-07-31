import * as path from "path";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import {store, history} from "./stores/store";
import FileList from "./pages/fileList";
import "./styles/basicTest.scss";
import "./styles/swagger-ui.css";
import "./styles/graphiql.css";
import Logger from "./utils/logger";

const logger = Logger(path.basename(__filename));

console.log('router loaded');
const App = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <FileList/>
    </ConnectedRouter>
  </Provider>);

ReactDOM.render(App, document.getElementById("reactContainer"));
