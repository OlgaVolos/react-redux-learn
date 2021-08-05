import {
    ADD_TODOS,
    LOADING_TRUE,
    LOADING_FALSE,
    PUSH_TODO,
} from '../action-types';

const initialState = {
    todos: [],
    todosLoading: false
};

export const todosReducer  = (state = initialState, action) => {
    switch (action.types) {
        case ADD_TODOS: {
            return {...state, todos: action.payload}
        }
        case LOADING_TRUE: {
            return {...state, todosLoading: true}
        }
        case LOADING_FALSE: {
            return {...state, todosLoading: false}
        }
        case PUSH_TODO: {
            return {...state, todos: [...state.todos, action.payload] }
        }
        default:
            return state


    }

};
