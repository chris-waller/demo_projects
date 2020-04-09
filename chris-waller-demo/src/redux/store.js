import { createStore, applyMiddleware } from "redux";

// redux logger with default options
import logger from "redux-logger";

// import the reducers -- may need to add a combiner in the future
import reducer from "./reducers";

export default function configureStore(initialState) {
  return createStore(reducer, initialState, applyMiddleware(logger));  
}