import { LOAD_PHOTOS_COMPLETE } from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case LOAD_PHOTOS_COMPLETE:
            return state.concat(action.photos);
        default:
            return state;
    }
}