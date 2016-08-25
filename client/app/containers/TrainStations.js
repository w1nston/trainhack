import { connect } from 'react-redux';
import TrainStations from '../components/TrainStations';
import { getTrainStations, getFetchingStatus } from '../reducers/trainDataReducer';
import * as actions from '../actions/trainSearchFormActions';

function mapStateToProps(state) {
  return {
    trainStations: getTrainStations(state),
    isFetching: getFetchingStatus(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick(stationName) {
      dispatch(actions.fetchStationQuestions(stationName));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainStations);
