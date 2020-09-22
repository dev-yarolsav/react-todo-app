import {ADD_TODO, LOAD_TODOS, REMOVE_TODO, TOGGLE_TODO} from "./actions";
import {START_LOADING, STOP_LOADING} from "../loading/actions";
import {APP_LOGIN_USER} from "../app/actions";

const initialState = {
    list: [],
    entities: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case APP_LOGIN_USER: {
            return {
                ...initialState
            };
        }
        case LOAD_TODOS: {
            const { items } = action.payload;

            return {
                ...state,
                list: items.map(i => i.id),
                entities: items.reduce((acc, val) => {
                    acc[val.id] = val;
                    return acc;
                }, {})
            };
        }
        case ADD_TODO: {
            const { id, text, completed } = action.payload;
            return {
                ...state,
                list: [...state.list, id],
                entities: {
                    ...state.entities,
                    [id]: {
                        text,
                        completed: completed || false
                    }
                }
            };
        }
        case TOGGLE_TODO: {
            const { id, completed } = action.payload;

            return {
                ...state,
                entities: {
                    ...state.entities,
                    [id]: {
                        ...state.entities[id],
                        completed: completed
                    }
                }
            };
        }
        case START_LOADING:
        case STOP_LOADING: {
            const { loadingKey } = action.payload;
            const [actionType, id] = loadingKey;
            const isLoading = action.type === START_LOADING;

            if(actionType === TOGGLE_TODO) {
                const isToggling = isLoading
                return {...state, entities: {...state.entities, [id]: {...state.entities[id], isToggling}}};
            } else if(actionType === REMOVE_TODO) {
                const isRemoving = isLoading
                return {...state, entities: {...state.entities, [id]: {...state.entities[id], isRemoving}}};
            }

            return state;
        }
        case REMOVE_TODO: {
            const { id } = action.payload;
            return {
                ...state,
                list: state.list.filter(i => i !== id)
            };
        }
        default:
            return state;
    }
}
