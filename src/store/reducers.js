import {combineReducers} from "redux";

import loading from "./loading/reducer";
import user from "./user/reducer";
import todos from "./todos/reducer";

export default combineReducers({
    loading,
    user,
    todos
});