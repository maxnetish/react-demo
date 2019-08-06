import {Reducer} from "redux";
import {RECEIVE_FAIL_USERS, RECEIVE_SUCCESS_USERS, REQUEST_USERS} from "./users-actions";
import {IUsersListProps} from "./users-list";

const initialState: IUsersListProps = {
    loading: false,
    users: [],
    error: null
};

export const usersReducer: Reducer<IUsersListProps> = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_USERS:
            return Object.assign({}, state, {loading: true});
        case RECEIVE_SUCCESS_USERS:
            return Object.assign({}, state, {loading: false, users: action.users, error: null});
        case RECEIVE_FAIL_USERS:
            return Object.assign({}, state, {loading: false, error: action.error});
        default:
            return state;
    }
};
