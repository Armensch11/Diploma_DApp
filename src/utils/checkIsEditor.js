import data from '../contractUtils/contractABI.json';
import { CONTRACT_ADDRESS } from '../contractUtils/contactAddress';
import { providers, Contract } from 'ethers';

export default async function checkIsEditor(address) {
  const provider = new providers.Web3Provider(window.ethereum);

  const contract = new Contract(CONTRACT_ADDRESS, data.abi, provider);
  const isEditor = await contract.editors(address);
 
  return isEditor;
}
