import { InjectedConnector } from '@web3-react/injected-connector';

export const isMetamaskInstalled =
  typeof window !== 'undefined' && window.ethereum;

const injected = new InjectedConnector({
  supportedChainIds: [5],
});

export default injected;
