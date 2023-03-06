import { useCallback, useEffect, useState } from 'react';

import { useWeb3React } from '@web3-react/core';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectAuth,
  signIn,
} from '@/features/ConnectWallet/connectWalletSlice';
import injected from '@/utils/getInjectedConnector';


// export const useConnectWallet = () => {
//   const dispatch = useDispatch();
//   const { address, signedIn } = useSelector(selectAuth);
//   const { activate, account, error } = useWeb3React();
//   const [contract, errorWeb3] = useEthers();
//   const [isAdmin, setIsAdmin] = useState(false);

//   console.log('account', account);

//   const callMethod = async (address) => {
//     if (contract) {
//       try {
//         console.log('available contract is ', contract);
//         const res = await contract?.awaitingDiploma(
//           '0x4cc5ec3A01D1E9c69cBdE13397171cbaf9eEDC72'
//         );
//         return res;
//       } catch (error) {
//         console.log('error is in useConnect callMethod');
//       }
//     }
//   };

//   useEffect(() => {
//     if (window.ethereum) {
//       window.ethereum.on('chainChanged', () => {
//         activate(injected);
//       });
//     }

//     const getStatus = async () => {
//       const res = await callMethod(address);
//       setIsAdmin(res);
//       console.log(res);
//     };

//     getStatus();
//   }, [address]);

//   const handleConnectWallet = useCallback(async () => {
//     console.log(signedIn, 123);
//     if (!signedIn) {
//       await activate(injected);
//     }
//   }, [injected, signedIn]);

//   useEffect(() => {
//     if (account) {
//       console.log('account.address', account.address);
//       dispatch(signIn(account));
//     }
//   }, [account, dispatch]);

//   return {
//     address,
//     signedIn,
//     error,
//     handleConnectWallet,
//   };
// };

//original useConnectWallet
// import { useCallback, useEffect } from 'react';

// import { useWeb3React } from '@web3-react/core';
// import { useDispatch, useSelector } from 'react-redux';

// import {
//   selectAuth,
//   signIn,
// } from '@/features/ConnectWallet/connectWalletSlice';
// import injected from '@/utils/getInjectedConnector';

export const useConnectWallet = () => {
  const dispatch = useDispatch();
  const { address, signedIn } = useSelector(selectAuth);
  const { activate, account, error } = useWeb3React();

  console.log(address);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('chainChanged', () => {
        activate(injected);
      });
    }
  }, []);

  const handleConnectWallet = useCallback(async () => {
    if (!signedIn) {
      console.log('activating');
      await activate(injected);
      console.log('activated');
    }
  }, [activate, signedIn]);

  useEffect(() => {
    console.log('accc', account);
    if (account) {
      dispatch(signIn(account));
    }
  }, [account, dispatch]);

  return {
    address,
    signedIn,
    error,
    handleConnectWallet,
  };
};
