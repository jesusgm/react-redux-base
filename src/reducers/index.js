import {
  combineReducers
} from "redux";

import counter from "./counter";

const reducer = combineReducers({
  // import other reducers here
  counter,
});

export default reducer;