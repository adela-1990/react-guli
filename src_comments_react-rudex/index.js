import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./container/app/App";
import store from "./reduce/store";

ReactDOM.render((<Provider store={store}><App/></Provider>),
    document.getElementById('root'))