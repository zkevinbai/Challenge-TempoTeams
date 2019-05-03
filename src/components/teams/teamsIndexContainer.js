import { connect } from 'react-redux';
import { getAllTeams } from '../../actions/teamActions';
import { getAllUsers } from '../../actions/userActions';
import TeamsIndex from './teamsIndex';

const mapStateToProps = (storeState, ownProps) => {
    let teams = storeState.teams;
    return {
        teams
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllTeams: () => dispatch(getAllTeams()),
        getAllUsers: () => dispatch(getAllUsers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamsIndex);