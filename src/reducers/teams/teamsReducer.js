import {
    RECEIVE_TEAMS
} from '../../actions/teamActions';

const teamsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_TEAMS:
            let changedState = {};
            action.teams.forEach(team => {
                changedState[team.id] = team;
            });
            return changedState;

        default:
            return oldState;
    }
}

export default teamsReducer;