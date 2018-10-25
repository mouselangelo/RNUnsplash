import { LOAD_PHOTOS_COMPLETE } from '../actions/actionTypes';

const Pagination = (state = { page: 1 }, action) => {
    switch (action.type) {
        case LOAD_PHOTOS_COMPLETE:
            return { ...state, page: state.page + 1 };
        default:
            return state;
    }
};

export default Pagination;