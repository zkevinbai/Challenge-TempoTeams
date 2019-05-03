import {
    getTeams,
    queryTeam
} from '../util/tempoApiUtil';

// Constants
export const RECEIVE_TEAMS = "RECEIVE_TEAMS";
export const RECEIVE_TEAM = "RECEIVE_TEAM";

// Action Creators
export const receiveTeams = (teams) => ({
    type: RECEIVE_TEAMS,
    teams
})

export const receiveTeam = (team) => ({
    type: RECEIVE_TEAM,
    team
})

// Thunk Action Creators
export const getAllTeams = () => (dispatch) => {
    return getTeams()
        .then(resData => dispatch(receiveTeams(resData)))
        .catch(resErr => console.log(resErr));
};

export const getSingleTeam = (teamId) => (dispatch) => {
    return queryTeam(teamId)
        .then(resData => dispatch(receiveTeam(resData)))
        .catch(resErr => console.log(resErr));
};