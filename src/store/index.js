import { createStore } from "redux";
//import storyReducer from "../reducers/story";
import rootReducer from "../reducers";

const store = createStore(rootReducer);

export default store;
