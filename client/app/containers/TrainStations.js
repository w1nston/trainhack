import { connect } from 'react-redux';
import TrainStations from '../components/TrainStations';
import { getTrainStations, getFetchingStatus } from '../reducers/trainDataReducer';

function mapStateToProps(state) {
  return {
    trainStations: getTrainStations(state),
    isFetching: getFetchingStatus(state),
  };
}

export default connect(mapStateToProps)(TrainStations);
