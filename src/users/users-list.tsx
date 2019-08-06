import * as React from 'react';
import {FunctionComponent} from "react";
import {IUser} from "../dto/user";
import {UserCard} from "./user-card";
import {connect} from "react-redux";
import {fetchUsers} from "./users-actions";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

export interface IUsersListProps {
    error: string | null;
    loading: boolean;
    users: IUser[];
}

export interface IUserListEvents {
    requestUsers: () => void;
}

function mapStateToProps(state: { users: IUsersListProps }): IUsersListProps {
    return {
        error: state.users.error,
        loading: state.users.loading,
        users: state.users.users
    };
}

function mapDispatchToProps(dispatch: ThunkDispatch<IUsersListProps, {}, AnyAction>): IUserListEvents {
    return {
        requestUsers: () => dispatch(fetchUsers())
    };
}

const UsersListDummy: FunctionComponent<IUsersListProps & IUserListEvents> = function (props) {
    return (
        <section>
            <div>
                <button type="button" onClick={props.requestUsers} disabled={props.loading}>Request
                    users
                </button>
            </div>
            {props.users ?
                <div className={"users-list__error"}>
                    {props.error}
                </div>
                : null
            }
            <div className="users-list">
                {props.loading ?
                    'Wait...' :
                    props.users.map(user => <UserCard user={user} key={user.id}/>)
                }
            </div>
        </section>
    );
};

export const UsersList = connect(mapStateToProps, mapDispatchToProps)(UsersListDummy);
