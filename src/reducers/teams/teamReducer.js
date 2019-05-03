import {
    RECEIVE_TEAM
} from '../../actions/teamActions';

const teamReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_TEAM:
            newState = action.team;
            return newState;

        default:
            return oldState;
    }
}

export default teamReducer;