import { useCallback } from 'react';

import { useWeb3React } from '@web3-react/core';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectAuth,
  signOut,
} from '@/features/ConnectWallet/connectWalletSlice';
import injected from '@/utils/getInjectedConnector';

export const useIsConnected = () => {
  const dispatch = useDispatch();
  const { activate } = useWeb3React();
  const { address } = useSelector(selectAuth);

  const checkIsUserConnected = useCallback(async () => {
    try {
      const authorized = await injected.isAuthorized();

      if (!authorized) {
        dispatch(signOut());
      }
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);

  const checkLoggedInSession = useCallback(async () => {
    try {
      const authorized = await injected.isAuthorized();

      if (authorized && !address) {
        await activate(injected);
        return await injected.getAccount();
      }

      return address;
    } catch (e) {
      console.log(e);
    }
  }, [address, activate]);

  const pushToLogin = useCallback(async () => {
    try {
      await activate(injected);
      return await injected.getAccount();
    } catch (e) {
      console.log(e);
    }
  }, [activate]);

  return { checkLoggedInSession, checkIsUserConnected, pushToLogin };
};
