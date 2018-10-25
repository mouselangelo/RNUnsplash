import { combineReducers } from "redux";
import Photos from './Photos';
import Pagination from './Pagination';

export default combineReducers({
    photos: Photos,
    pagination: Pagination
});