import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './app.css';

import TeamsIndexContainer from './components/teams/teamsIndexContainer';
import TeamShowContainer from './components/teams/teamShowContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/team/:id" component={TeamShowContainer} />
          <Route path="/" component={TeamsIndexContainer} />
        </Switch>
      </div>
    )
  }
}

export default App;