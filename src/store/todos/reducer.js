import {ADD_TODO, LOAD_TODOS, REMOVE_TODO, TOGGLE_TODO} from "./actions";

const initialState = {
    list: [],
    entities: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
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
