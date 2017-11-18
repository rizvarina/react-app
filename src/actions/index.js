import { createAction } from '../helpers';
import * as constants from './constants';

export const deleteItem = createAction(constants.DELETE_ITEM);
export const addItem = createAction(constants.ADD_ITEM);
export const editDesc = createAction(constants.EDIT_DESC);
export const changeDesc = createAction(constants.CHANGE_DESC);
