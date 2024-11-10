import React, { memo } from 'react';
import { EthosConnectProvider } from './path-to-your-component';

const Wrapper = memo(({ children }) => (
  <EthosConnectProvider>
    {children}
  </EthosConnectProvider>
));

export default Wrapper;
