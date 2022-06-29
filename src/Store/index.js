import {
    AnyAction,
    combineReducers,
    configureStore,
    Reducer,
} from '@reduxjs/toolkit';
import FeedbackReducer from './Feedback/reducer';

const combinedReducer = combineReducers({
    Feedback:FeedbackReducer
});
const rootReducer = (state, action) => {
    return combinedReducer(state, action);
};
const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;