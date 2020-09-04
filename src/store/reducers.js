import {combineReducers} from "redux";

import loading from "./loading/reducer";
import app from "./app/reducer";
import entities from "./entities/reducer";
import todos from "./todos/reducer";

export default combineReducers({
    loading,
    app,
    entities,
    todos
});