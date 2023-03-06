import data from '../contractUtils/contractABI.json';
import {
  CONTRACT_ADDRESS,
  ALCHEMY_RPC_URL,
} from '../contractUtils/contactAddress';
import { providers, Contract } from 'ethers';

export default async function getContractMethod(connection, contractMethod) {
  let provider = null;
  if (connection) {
    provider = new providers.Web3Provider(connection);
  } else {
    provider = new providers.JsonRpcProvider(ALCHEMY_RPC_URL);
  }
  const contract = new Contract(CONTRACT_ADDRESS, data.abi, provider);
  return contract;
}
