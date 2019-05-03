import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './teamsIndex.css'
export default class teamsIndex extends Component {

  constructor(props){
    super(props);
    this.state = {
      selected: "0",
      teams: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.renderOptions = this.renderOptions.bind(this);
    this.renderTeams = this.renderTeams.bind(this);
  }

  componentDidMount() {
    console.log("index has mounted")
    this.props.getAllTeams()
      .then((res) => this.setState({teams: Object.values(this.props.teams)}));
    this.props.getAllUsers();
  }

  handleChange(e) {
    e.preventDefault();

    let selected = e.target.value;
    this.setState({
      selected
    });
  }

  renderOptions() {
    return this.state.teams.map((team) => {
      return <option key={team.id} value={team.id}>{team.name}</option>
    })
  }

  renderTeams(){
    if (this.state.selected === "0"){
      return this.state.teams.map((team) => {
        return <Link to={`/team/${team.id}`} key={`${team.id}`}>
          <div className="team-box-item">
            {team.name}
          </div>
        </Link>
      })
    } else {
      if(this.state.teams.length){
        let selectedTeam = this.props.teams[this.state.selected];
        return <Link to={`/team/${selectedTeam.id}`} key={`${selectedTeam.id}`}>
          <div className="team-box-item">
            {selectedTeam.name}
          </div>
        </Link>
      }
    }
  }

  render() {
    return (
      <div className="team-index">

        <div className="team-filter">
          <select name="teams" onChange={this.handleChange}>
            <option value="0">All Teams</option>
            {this.renderOptions()}
          </select>
        </div>

        <div className="team-box">
          {this.renderTeams()}
        </div>

      </div>
    )
  }
}
