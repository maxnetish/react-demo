import './index.css';
import App from './App';
import * as React from 'react';
import {render} from "react-dom";
import {createStore, applyMiddleware, combineReducers} from "redux";
import {default as thunkMiddleware} from 'redux-thunk'
import {usersReducer} from "./users/users-reducer";
import {Provider} from "react-redux";

const reducer = combineReducers({
    users: usersReducer
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export function runApp() {
    render(
        (
            <Provider store={store}>
                <App/>
            </Provider>
        ),
        document.getElementById('root')
    );
}
