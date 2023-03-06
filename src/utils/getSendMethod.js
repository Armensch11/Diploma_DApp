import data from '../contractUtils/contractABI.json';
import { CONTRACT_ADDRESS } from '../contractUtils/contactAddress';
import { providers, Contract } from 'ethers';
import { useWeb3React } from '@web3-react/core';

export default async function getSendMethod(contractMethod) {
  const provider = new providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  console.log(signer);

  const contract = new Contract(CONTRACT_ADDRESS, data.abi, signer);
  return contract[contractMethod];
}
