import { put, takeEvery } from 'redux-saga/effects';
import { SIGN_IN_SUBMITTED, SIGN_IN_SUCCEEDED, SIGN_IN_FAILED } from './actions';
import { NOTICE_SET } from 'Page/store/actions';

export function* submitSignIn () {
  try {
    const token = 'abcd1234';
    localStorage.setItem('token', token);
    yield token;
    
    yield put({ type: SIGN_IN_SUCCEEDED });
    yield put({ type: NOTICE_SET, notice: 'Welcome!' });
  } catch (error) {
    yield put({ type: SIGN_IN_FAILED });
  }
}

function* saga() {
  yield takeEvery(SIGN_IN_SUBMITTED, submitSignIn);
}

export default saga;
