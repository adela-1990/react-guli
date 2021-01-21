import { createStore } from "redux";
import { comments } from "./reducers";
const store = createStore(comments)

export default store