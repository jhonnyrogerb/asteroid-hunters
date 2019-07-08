import { handleActions } from 'redux-actions';
import types from "./types";

const INITIAL_STATE = {
    fetching: true,
    feed: []
};

const reducer = handleActions(
    {
        [types.FETCH_FEED.request]: (state) => ({
            ...state,
            fetching: true
        }),
        [types.FETCH_FEED.fail]: (state, { error }) => ({
            ...state,
            fetching: false,
        }),
        [types.FETCH_FEED.success]: (state, { payload }) => {
            return {
                ...state,
                feed: [...state.feed, ...payload.data],
                fetching: false
            };
        },
        [types.FETCH_TODAY_FEED.request]: (state) => ({
            ...state,
            fetching: true
        }),
        [types.FETCH_TODAY_FEED.fail]: (state, { error }) => ({
            ...state,
            fetching: false,
        }),
        [types.FETCH_TODAY_FEED.success]: (state, { payload }) => {
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
