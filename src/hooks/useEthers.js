import {
  CONTRACT_ADDRESS,
  ALCHEMY_RPC_URL,
} from '../contractUtils/contactAddress';
import abi from '../contractUtils/contractABI.json';

import { useState, useEffect } from 'react';
import { providers, Contract } from 'ethers';

const useEthers = () => {
  const [contract, setContract] = useState(null);
  const [error, setError] = useState(null);

  const [provider, setProvider] = useState(null);

  // const [signer, setSigner] = useState(null);

  useEffect(() => {
    //const provider = new providers.JsonRpcProvider(ALCHEMY_RPC_URL);
    if (window.ethereum) {
      setProvider(new providers.Web3Provider(window.ethereum));
    } else {
      setProvider(new providers.JsonRpcProvider(ALCHEMY_RPC_URL));
    }
  }, []);
  useEffect(() => {
    const getInstance = async () => {
      try {
        const instance = new Contract(CONTRACT_ADDRESS, abi, provider);

        setContract(instance);
        // setSigner(provider.getSigner());

        //console.log(provider);
      } catch (err) {
        setError(err);
      }
    };
    getInstance();
  }, [provider]);

  return [contract, error];
};

export default useEthers;
