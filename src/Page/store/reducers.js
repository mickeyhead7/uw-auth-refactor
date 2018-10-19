import { append, compose, filter, gt, length, prop } from 'ramda';
import { LOADING_STARTED, LOADING_ENDED, NOTICE_SET, NOTICE_UNSET } from 'Page/store/actions';

export const defaultState = {
  notice: null,
  loading: [],
};

const filterLoadingItem = (match, items) => filter(item => item !== match, items);

const appendLoadingItem = (item, items) => {
  const filtered = filterLoadingItem(item, items);

  return append(item, filtered);
};

const defaultSelector = prop('page');

export const noticeSelector = compose(prop('notice'), defaultSelector);

export const loadingSelector = compose(prop('loading'), defaultSelector);

export const isLoading = state => gt(length(loadingSelector(state)), 0);

export default (state = defaultState, action) => {
  switch (action.type) {
    case NOTICE_SET:
      return {
        ...state,
        notice: action.notice,
      };

    case NOTICE_UNSET:
      return {
        ...state,
        notice: null,
      };

    case LOADING_STARTED:
      return {
        ...state,
        loading: appendLoadingItem(action.item, state.loading),
      };

    case LOADING_ENDED:
      return {
        ...state,
        loading: filterLoadingItem(action.item, state.loading),
      };

    default: 
      return state;
  }
};
