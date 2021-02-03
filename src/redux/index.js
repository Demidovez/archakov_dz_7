import { createStore } from "redux";
import * as Actions from "./actions";
import { reducer } from "./reducer";

const store = createStore(reducer);

export { store, Actions };
