import {
    ADD_TODOS,
    LOADING_TRUE,
    LOADING_FALSE,
    PUSH_TODO,
} from '../action-types';

export const setLoadingFalse  = () => ({type: LOADING_FALSE});
export const setLoadingTrue  = () => ({type: LOADING_TRUE});
export const addTodos  = (payload) => ({type: ADD_TODOS, payload});
export const pushTodos  = (payload) => ({type: PUSH_TODO, payload});
