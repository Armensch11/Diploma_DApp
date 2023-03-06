import data from '../contractUtils/contractABI.json';
import {
  CONTRACT_ADDRESS,
  ALCHEMY_RPC_URL,
} from '../contractUtils/contactAddress';
import { providers, Contract } from 'ethers';

import getFromIPFS from './getFromIpfs';

const searchById = async (id) => {
  let provider = null;
  if (window.ethereum) {
    provider = new providers.Web3Provider(window.ethereum);
  } else {
    provider = new providers.JsonRpcProvider(ALCHEMY_RPC_URL);
  }
  const contract = new Contract(CONTRACT_ADDRESS, data.abi, provider);

  console.log(`Getting the DiplomaAdded events...`);
  const blockHeight = await provider.getBlockNumber();
  console.log(blockHeight);
  let events = await contract.queryFilter(
    'DiplomaAdded',
    blockHeight - 100000,
    blockHeight
  );

  const event = events.filter(
    (el) => parseInt(el.args[2]._hex, 16).toString() === id
  );
  console.log(event);
  if (event.length) {
    console.log(event);
    const diplomaHash = event[0]?.args.hash;
    console.log('hash is ', diplomaHash);
    const diplomaURI = await contract.getDiploma(diplomaHash);
    console.log(diplomaURI);

    const cid = diplomaURI.substring(21);
    const getJson = await getFromIPFS(cid);
    getJson.id = id;
    console.log(getJson);
    return [getJson];
  }
};
export default searchById;
