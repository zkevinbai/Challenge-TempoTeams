import {
    getUsers,
    queryUser
} from '../util/tempoApiUtil';

// Constants
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

// Action Creators
export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
}) 

export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
}) 

// Thunk Action Creators
export const getAllUsers = () => (dispatch) => {
    return getUsers()
        .then(resData => dispatch(receiveUsers(resData)))
        .catch(resErr => console.log(resErr));
};

export const getSingleUser = (userId) => (dispatch) => {
    return queryUser(userId)
        .then(resData => dispatch(receiveUser(resData)))
        .catch(resErr => console.log(resErr));
};