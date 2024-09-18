import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import homeReducer from './homeReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    home: homeReducer,
});

export default rootReducer;
