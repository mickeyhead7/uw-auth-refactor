import { compose, prop } from 'ramda';
import { SIGN_IN_SUBMITTED, SIGN_IN_SUCCEEDED, SIGN_IN_FAILED } from 'Auth/store/actions';

export const defaultState = {
  isSubmitting: false,
};

const defaultSelector = prop('auth');

export const isSubmittingSelector = compose(prop('isSubmitting'), defaultSelector);

export default (state = defaultState, action) => {
  switch (action.type) {
    case SIGN_IN_SUBMITTED:
      return {
        ...state,
        isSubmitting: true,
      };

    case SIGN_IN_SUCCEEDED:
      return {
        ...state,
        isSubmitting: false,
      };

    case SIGN_IN_FAILED:
      return {
        ...state,
        isSubmitting: false,
      };

    default: 
      return state;
  }
};
