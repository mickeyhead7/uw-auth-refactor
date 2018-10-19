import { all, fork } from 'redux-saga/effects';
import auth from 'Auth/store/sagas';

export default function* rootSaga () {
  yield all([
    fork(auth),
  ]);
}
