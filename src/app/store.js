import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import connectWalletSlice from '@/features/ConnectWallet/connectWalletSlice';

export const store = configureStore({
  reducer: {
    auth: connectWalletSlice,
  },
});

export const wrapper = createWrapper(() => store);
