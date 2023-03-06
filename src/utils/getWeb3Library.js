import { ethers } from 'ethers';

const getWeb3Library = (provider) => {
  return new ethers.providers.Web3Provider(provider);
};

export default getWeb3Library;
