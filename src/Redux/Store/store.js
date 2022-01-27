import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { regreducer } from "../Register/reducer";
import { searchReducer } from "../Search/reducer";

const rootReducer = combineReducers({
  regState: regreducer,
 searchState: searchReducer
});

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
);
