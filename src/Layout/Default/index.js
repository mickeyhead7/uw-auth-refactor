import React from 'react';
import Ui from './ui';
import Loading from 'Page/Loading';

const Gateway = ({ children }) => (
  <Loading>
    <Ui>
      {children}
    </Ui>
  </Loading>
);

export default Gateway;
