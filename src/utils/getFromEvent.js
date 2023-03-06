import { providers, Contract } from 'ethers';
import data from '../contractUtils/contractABI.json';
import {
  CONTRACT_ADDRESS,
  ALCHEMY_RPC_URL,
} from '../contractUtils/contactAddress';

//filter events based on hashData
const getFromEvent = async (address, searchDepth = 200000) => {
  let provider = null;
  if (window.ethereum) {
    provider = new providers.Web3Provider(window.ethereum);
  } else {
    provider = new providers.JsonRpcProvider(ALCHEMY_RPC_URL);
  }
  const contract = new Contract(CONTRACT_ADDRESS, data.abi, provider);

  // console.log(`Getting the DiplomaAdded events...`);
  const blockHeight = await provider.getBlockNumber();

  let events = await contract.queryFilter(
    'DiplomaAdded',
    blockHeight - searchDepth,
    blockHeight
  );

  const hashIdPairs = {};
  events.forEach((el) => {
    if (el.args[1].toString().toLowerCase() === address.toLowerCase()) {
      let key = el.args[0].toString();

      let value = parseInt(el.args[2]._hex, 16).toString();

      hashIdPairs[key] = value;
    }
  });

  return hashIdPairs;
};
export default getFromEvent;
