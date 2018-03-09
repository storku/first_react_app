import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import articlesReducer from './articlesReducer';

const rootReducer = combineReducers({
  articles: articlesReducer,
  form: formReducer
});

export default rootReducer;
