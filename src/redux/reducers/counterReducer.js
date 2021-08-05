const initialState = {
    value: 0
};
export const counterReducer  = (state = initialState, action) => {
    switch (action.types) {
        case 'INC': {
            return {...state, value: state.value+1}
        }
        default:
            return state


    }

};
