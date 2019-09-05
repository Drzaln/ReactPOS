import { combineReducers } from 'redux';
import menu from './menu';
import category from './kategori';

const appReducer = combineReducers({
    menu,
    category
})

export default appReducer