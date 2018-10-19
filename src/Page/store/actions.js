export const NOTICE_SET = 'NOTICE_SET';
export const NOTICE_UNSET = 'NOTICE_UNSET';
export const LOADING_STARTED = 'LOADING_STARTED';
export const LOADING_ENDED = 'LOADING_ENDED';

export const noticeSet = notice => ({
  type: NOTICE_SET,
  notice,
});

export const noticeUnset = () => ({
  type: NOTICE_UNSET,
});

export const loadingStarted = item => ({
  type: LOADING_STARTED,
  item,
});

export const loadingEnded = item => ({
  type: LOADING_ENDED,
  item,
});
