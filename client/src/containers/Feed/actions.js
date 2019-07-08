import types from './types';

export function fetchFeed(startDate, endDate) {
    return {
        types: types.FETCH_FEED.types(),
        payload: {
            request: {
                url: `/feed?startDate=${startDate}&endDate=${endDate}`,
                method: 'get'
            }
        }
    };
}

export function fetchTodayFeed() {
    return {
        types: types.FETCH_TODAY_FEED.types(),
        payload: {
            request: {
                url: '/feed/today',
                method: 'get'
            }
        }
    };
}
