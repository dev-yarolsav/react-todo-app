import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "../actionTypes";

const initialState = {
    list: ["1"],
    entities: {
        "1": {
            text: "todo.",
            completed: false
        }
    }
};

const getNextId = state => state.list.length + 1 + '';

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            const id = getNextId(state);
            const { text } = action.payload;
            return {
                ...state,
                list: [...state.list, id],
                entities: {
                    ...state.entities,
                    [id]: {
                        text,
                        completed: false
                    }
                }
            };
        }
        case TOGGLE_TODO: {
            const { id } = action.payload;
            return {
                ...state,
                entities: {
                    ...state.entities,
                    [id]: {
                        ...state.entities[id],
                        completed: !state.entities[id].completed
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
