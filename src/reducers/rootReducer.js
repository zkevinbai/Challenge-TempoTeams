import { combineReducers } from 'redux';

import teams from './teams/teamsReducer';
import team from './teams/teamReducer';

import users from './users/usersReducer';
import user from './users/userReducer';

const RootReducer = combineReducers({
    users,
    teams,
    user,
    team
});

export default RootReducer;