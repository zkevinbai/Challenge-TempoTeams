import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './teamShow.css';

export default class teamsIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: {id:"0", name:"default"},
            selected: "0",
            teamMates: []
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.renderOptions = this.renderOptions.bind(this);
        this.renderTeammates = this.renderTeammates.bind(this);
    }

    componentDidMount() {
        console.log("show has mounted")
        
        let teamId = this.props.match.params.id;

        let promiseTeam = new Promise((resolve) => resolve(this.props.getSingleTeam(teamId)))
        let promiseUsers = new Promise((resolve) => resolve(this.props.getAllUsers()))

        Promise.all([promiseUsers, promiseTeam])
            .then(res => this.setState({ team: this.props.team }))
            .then(res => {
                let membersArray = this.props.team.members;
                this.setState({
                    teamMates: membersArray.map(userId => {
                        return (this.props.users[userId])
                    })
                })
            });
    }

    handleChange(e) {
        e.preventDefault();

        let selected = e.target.value;
        this.setState({
            selected
        });
    }

    renderOptions() {        
        return this.state.teamMates.map((teamMate) => {
            return <option key={teamMate.id} value={teamMate.id}>{teamMate.name}</option>
        })
    }
    
    renderTeammates() {
        if (this.state.selected === "0") {
            if (!!Object.values(this.state.teamMates).length) {
                let membersArray = this.state.teamMates;

                return membersArray.map(user => {
                    return (<div key={user.id} className="user-box-item">
                        {user.name}
                    </div>)
                })
            }
        } else {
            if (this.state.teamMates.length) {
                let selectedUser = this.props.users[this.state.selected];
                return (<div key={selectedUser.id} className="user-box-item">
                    {selectedUser.name}
                </div>)
            }
        }
    }

    render() {
        return (
            <div className="team-show">
                <Link to="/" className="home-link">All Teams</Link>

                <div className="team-filter">
                    <select name="teamMates" onChange={this.handleChange}>
                        <option value="0">All Team Members</option>
                        {this.renderOptions()}
                    </select>
                </div>

                <div className="team-name">
                    {this.state.team.name}
                </div>
                
                <div className="user-box">
                    {this.renderTeammates()}
                </div>
            </div>
        )
    }
}
