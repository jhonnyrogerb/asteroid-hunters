import { combineReducers } from 'redux';
import homeReducer from '~/containers/Home/reducer'
import feedReducer from '~/containers/Feed/reducer'

export default combineReducers({
    homeState: homeReducer,
    feedState: feedReducer
});
