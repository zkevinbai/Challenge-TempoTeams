import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store'

import * as UserActions from './actions/userActions';
import * as TeamActions from './actions/teamActions';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();

    // #########################################################################
    // --------------------------TESTING START------------------------------
    // Window Util ----------------------------------------------------------
    window.getAllUsers = UserActions.getAllUsers
    window.getSingleUser = UserActions.getSingleUser;

    window.getAllTeams = TeamActions.getAllTeams;
    window.getSingleTeam = TeamActions.getSingleTeam;

    // Window Store ------------------------------------------------------------
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // --------------------------TESTING END---------------------------------
    // #########################################################################

    ReactDOM.render(
        <Root store={store} />,
        root
    );
});

