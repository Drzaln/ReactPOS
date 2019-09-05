import { combineReducers } from 'redux';
import menu from './menu';
import category from './kategori';
import user from "./user";

const appReducer = combineReducers({
    menu,
    category,
    user
})

export default appReducer