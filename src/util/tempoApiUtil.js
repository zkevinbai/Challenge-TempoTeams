import axios from 'axios';

// Tempo Api
export const getUsers = () => {
    return axios.get("http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/user/")
        .then(res => res.data);
};

export const getTeams = () => {
    return axios.get("http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/team/")
        .then(res => res.data);
};

export const queryUser = (userId) => {
    return axios.get(`http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/user/${userId}`)
        .then(res => res.data);
};

export const queryTeam = (teamId) => {
    return axios.get(`http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/team/${teamId}`)
        .then(res => res.data);
};

