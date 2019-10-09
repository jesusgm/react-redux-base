import {
    COUNTER_INCREMENT,
    COUNTER_DECREMENT,
} from "../actions/counter/types";

const initialState = {
    value: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case COUNTER_INCREMENT:
            return {
                value: state.value + 1,
            };

        case COUNTER_DECREMENT:
            return {
                value: state.value - 1,
            };
        default:
            return state;

    }
};