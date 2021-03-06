import { all } from 'redux-saga/effects';
import { alarmSagas } from 'src/redux/modules/alarm';
import { chronometerSagas } from 'src/redux/modules/chronometer';
import { countdownsSagas } from 'src/redux/modules/countdowns';
import { navigationSagas } from 'src/redux/modules/navigation';
import { toastSagas } from 'src/redux/modules/toast';

export function* rootSaga() {
  yield all([
    ...alarmSagas,
    ...chronometerSagas,
    ...countdownsSagas,
    ...navigationSagas,
    ...toastSagas,
  ]);
}
