import { connect } from 'react-redux';
import {getSingleTeam} from '../../actions/teamActions';
import {getAllUsers} from '../../actions/userActions';
import TeamShow from './teamShow';

const mapStateToProps = (storeState, ownProps) => {
    return {
        team: storeState.team,
        users: storeState.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getSingleTeam: (teamId) => dispatch(getSingleTeam(teamId)),
        getAllUsers: () => dispatch(getAllUsers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamShow);