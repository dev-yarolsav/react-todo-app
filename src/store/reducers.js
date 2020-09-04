import {combineReducers} from "redux";

import app from "./app/reducer";
import loading from "./loading/reducer";
import todos from "./todos/reducer";

export default combineReducers({
    loading,
    app,
    todos
});