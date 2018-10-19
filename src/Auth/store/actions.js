export const SIGN_IN_SUBMITTED = 'SIGN_IN_SUBMITTED';
export const SIGN_IN_SUCCEEDED = 'SIGN_IN_SUCCEEDED';
export const SIGN_IN_FAILED = 'SIGN_IN_FAILED';

export const signInSubmitted = (partnerId, password) => ({
  type: SIGN_IN_SUBMITTED,
  partnerId,
  password,
});

export const signInSucceeded = () => ({
  type: SIGN_IN_SUCCEEDED,
});

export const signinFailed = () => ({
  type: SIGN_IN_FAILED,
});
