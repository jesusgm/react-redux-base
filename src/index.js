import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./reducers";
import Layout from "./components/Layout/";

/** FontAwesome */
import "../node_modules/@fortawesome/fontawesome-free/js/all";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
/** Bulma */
import "bulma/css/bulma.css";
import "./index.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //eslint-disable-line
const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <Layout />
    </Router>
  </Provider>,
  document.getElementById("root") //eslint-disable-line
);
