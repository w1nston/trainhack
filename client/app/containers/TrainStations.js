import { connect } from 'react-redux';
import TrainStations from '../components/TrainStations';
import { getTrainStations, getFetchingStatus } from '../reducers/trainDataReducer';

function mapStateToProps(state) {
  return {
    trainStations: getTrainStations(state),
    isFetching: getFetchingStatus(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick() {
      dispatch()
    }
  };
}

export default connect(mapStateToProps)(TrainStations);
