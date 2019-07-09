import { handleActions } from 'redux-actions';
import types from "./types";

const INITIAL_STATE = {
    fetching: true,
    unitOfMeasure: 'metric'
};

const reducer = handleActions(
    {},
    INITIAL_STATE,
);

export default reducer;
