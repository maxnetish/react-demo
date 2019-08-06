import {Action, AnyAction, Dispatch} from "redux";
import {IUser} from "../dto/user";
import {ThunkAction} from "redux-thunk";
import {IUsersListProps} from "./users-list";

export const REQUEST_USERS = Symbol('Request users');

function requestUsers(): Action {
    return {
        type: REQUEST_USERS
    };
}

export const RECEIVE_SUCCESS_USERS = Symbol('Receive users');

function receiveUsers(users: IUser[]): Action & { users: IUser[] } {
    return {
        type: RECEIVE_SUCCESS_USERS,
        users
    };
}

export const RECEIVE_FAIL_USERS = Symbol('Receive users failed');

function receiveFailed(error: string): Action & { error: string } {
    return {
        type: RECEIVE_FAIL_USERS,
        error
    };
}

export function fetchUsers(): ThunkAction<Promise<void>, IUsersListProps, {}, AnyAction> {
    return async function (dispatch: Dispatch) {
        // notify that request about to call
        dispatch(requestUsers());
        try {
            const fetchResponse = await fetch('https://gorest.co.in/public-api/users?_format=json&access-token=cIffFLNzsOq6b0C0URTpYIeAfJJXRt3ECy2w', {
                method: 'GET',
                mode: 'cors',
            });
            const responseBody = await fetchResponse.json();
            const usersList: IUser[] = responseBody.result;
            dispatch(receiveUsers(usersList));
        } catch (err) {
            dispatch(receiveFailed(err.toString()));
        }
    }
}
