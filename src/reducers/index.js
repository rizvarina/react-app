import { combineReducers } from 'redux';
import { todolist } from './todolist';
import { categories } from './categories';

export const rootReducer = combineReducers({
    todolist,
    categories
});
