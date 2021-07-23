import {DEC,
    INC,
    INC_CUSTOM,
    RESET,
    INC_TWO,
    DEC_TWO,
    RESET_TWO,
    INC_CUSTOM_TWO,} from "../action-types";

const incAction = () => ({type: INC});
const decAction = () => ({type: DEC});
const resetAction = () => ({type: RESET});
const incCustomAction = (payload) => ({type: INC_CUSTOM, payload});
const incActionTwo = () => ({type: INC_TWO});
const decActionTwo = () => ({type: DEC_TWO});
const resetActionTwo = () => ({type: RESET_TWO});
const incCustomActionTwo = (payload) => ({type: INC_CUSTOM_TWO, payload});

export {
    incAction,
    decAction,
    resetAction,
    incCustomAction,
    incActionTwo,
    decActionTwo,
    resetActionTwo,
    incCustomActionTwo,
}
