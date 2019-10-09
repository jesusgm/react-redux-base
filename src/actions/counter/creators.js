import {
    COUNTER_INCREMENT,
    COUNTER_DECREMENT,
} from "./types";

// import * as api from "../../api";    //if you need

/**Example of fethc action */
/*
export const fetchCall = (id) => dispatch => {
    dispatch({
        type: FETCH_INIT
    });

    return api.getCall(id).then(
        response => {
            dispatch({
                type: FETCH_SUCCESS,
                response,
            });
        },
        error => {
            dispatch({
                type: FETCH_FAILURE,
                error
            });
        }
    );
};
*/

export const increment = () => dispatch => {
    dispatch({
        type: COUNTER_INCREMENT,
        payload: {}
    })
};

export const decrement = () => dispatch => {
    dispatch({
        type: COUNTER_DECREMENT,
        payload: {}
    })
};