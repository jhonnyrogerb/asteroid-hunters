import types from './types';

export function action(data) {
    return {
        type: types.ACTION,
        data
    };
}

export function request() {
    return {
        types: types.REQUEST.types(),
        fetching: true,
        payload: {
            request: {
                url: 'google',
                method: 'get'
            }
        }
    };
}
