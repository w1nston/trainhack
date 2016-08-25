import { connect } from 'react-redux';
import StationQuiz from '../components/StationQuiz';
import { getStationName, getFetchingStatus, getQuestions } from '../reducers/stationQuizReducer';

function mapStateToProps(state) {
  return {
    stationName: getStationName(state),
    isFetching: getFetchingStatus(state),
    questions: getQuestions(state),
  };
}

export default connect(mapStateToProps)(StationQuiz);
