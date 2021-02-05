import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import * as Actions from "./actions";
import { reducer } from "./reducer";

const store = createStore(reducer, applyMiddleware(thunk));

export { store, Actions };
