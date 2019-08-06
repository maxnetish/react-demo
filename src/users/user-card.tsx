import * as React from 'react';
import {IUser} from "../dto/user";
import {FunctionComponent} from "react";
import {default as classNames} from 'classnames';

export interface IUserCardProps {
    user: IUser
}

export const UserCard: FunctionComponent<IUserCardProps> = function UserCard(props) {

    return (
        <div className={classNames({'user-card': true, 'inactive': props.user.status === 'inactive'})}>
            <div className="user-card__username">
                {props.user.first_name} {props.user.last_name}
            </div>
            <div className="user-card__emeil">
                email: {props.user.email}
            </div>
            <div className="user-card__useravatar">
                <img className="user-card__useravatar-image" src={props.user._links.avatar.href} alt="avatar"/>
            </div>
        </div>
    );
};
