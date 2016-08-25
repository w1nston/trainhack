import { connect } from 'react-redux';
import * as actions from '../actions/trainSearchFormActions';
import { getTrainSearchFormState } from '../reducers/trainSearchFormReducer';
import TrainSearchForm from '../components/TrainSearchForm';

function mapStateToProps(state) {
  return getTrainSearchFormState(state);
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit(trainNumber) {
      dispatch(actions.searchForTrain(trainNumber));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainSearchForm);
