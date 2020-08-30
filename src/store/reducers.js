import {combineReducers} from "redux";

import loading from "./loading/reducer";
import todos from "./todos/reducer";

export default combineReducers({
    loading,
    todos
});