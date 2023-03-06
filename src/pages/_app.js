import '../styles/globals.css';
import { useEffect } from 'react';

import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import { Web3ReactProvider } from '@web3-react/core';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import { wrapper } from '@/app/store';
import {
  getUser,
  signIn,
  signOut,
} from '@/features/ConnectWallet/connectWalletSlice';
import { useIsConnected } from '@/hooks/useIsConnected';
import Main from '@/layout/Main/Main';
import theme from '@/styles/theme';
import createEmotionCache from '@/utils/createEmotionCache';
import { isMetamaskInstalled } from '@/utils/getInjectedConnector';
import getWeb3Library from '@/utils/getWeb3Library';

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  const dispatch = useDispatch();
  const { checkIsUserConnected } = useIsConnected();

  useEffect(() => {
    dispatch(getUser());

    if (isMetamaskInstalled) {
      window.ethereum.on('accountsChanged', ([address]) => {
        if (address) {
          dispatch(signIn(address));
        } else {
          dispatch(signOut());
        }
      });

      checkIsUserConnected();
    }
  }, [dispatch, checkIsUserConnected]);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Web3ReactProvider getLibrary={getWeb3Library}>
          <Main>
            <Component {...pageProps} />
          </Main>
          <Toaster position="top-center" reverseOrder />
        </Web3ReactProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default wrapper.withRedux(MyApp);
