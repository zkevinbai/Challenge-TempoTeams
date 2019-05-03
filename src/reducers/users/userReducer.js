import {
    RECEIVE_USER
} from '../../actions/userActions';

const userReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_USER:
            newState = action.user;
            return newState;

        default:
            return oldState;
    }
}

export default userReducer;