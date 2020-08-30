import {getUserLoggedInId} from "./user/selectors";
import {getTodos} from "./todos/selectors";
import {getLoadingStatus} from "./loading/selectors";

import {ADD_TODO, LOAD_TODOS} from "./todos/actions";

export const TodoListPageStateSelector = (store) => {
    return {
        userId: getUserLoggedInId(store),
        todos: getTodos(store),
        isLoading: getLoadingStatus(store, LOAD_TODOS),
        isAdding: getLoadingStatus(store, ADD_TODO),
    }
}