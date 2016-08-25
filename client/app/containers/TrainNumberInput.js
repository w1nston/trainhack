import { connect } from 'react-redux';
import * as actions from '../actions/trainSearchFormActions';
import { getTrainSearchFormState } from '../reducers/trainSearchFormReducer';
import TrainNumberInput from '../components/TrainNumberInput';

function mapStateToProps(state) {
  return {
    text: getTrainSearchFormState(state).trainNumber,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange(event) {

      const trainNumber = event.target.value;
      if (trainNumber.length < 6) {
        dispatch(actions.trainNumberInputChanged(trainNumber));
      }
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainNumberInput);
