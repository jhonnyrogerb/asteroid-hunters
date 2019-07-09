import { combineReducers } from 'redux';
import homeReducer from '~/containers/Home/reducer'
import feedReducer from '~/containers/Feed/reducer'
import configReducer from '~/containers/Config/reducer'

export default combineReducers({
    homeState: homeReducer,
    feedState: feedReducer,
    configState: configReducer
});
