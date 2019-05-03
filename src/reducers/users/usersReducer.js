import {
    RECEIVE_USERS
} from '../../actions/userActions';

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_USERS:
            let changedState = {};
            action.users.forEach(user => {
                changedState[user.id] = user;
            });
            return changedState;
            
        default:
            return oldState;
    }
}

export default usersReducer;