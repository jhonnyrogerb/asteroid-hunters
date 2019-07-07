import { handleActions } from 'redux-actions';
import types from "./types";

const INITIAL_STATE = {
    fetching: true
};

const reducer = handleActions(
    {
        [types.ACTION]: (state, { data }) => {
            return {
                ...state,
                data
            };
        },
        [types.REQUEST.request]: (state) => ({
            ...state,
            fetching: true
        }),
        [types.REQUEST.fail]: (state, { error }) => ({
            ...state,
            fetching: false,
        }),
        [types.REQUEST.success]: (state, { payload }) => {
            return {
                ...state,
                ...payload.data,
                fetching: false
            };
        },
    },
    INITIAL_STATE,
);

export default reducer;
