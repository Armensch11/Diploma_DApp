import { createSlice } from '@reduxjs/toolkit';

import {
  getAddress,
  handleSignIn,
  handleSignOut,
} from '@/services/authService';

const initialState = {
  address: '',
  signedIn: false,
  isEditor: false,
 
 
};

export const connectWalletSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, { payload }) => {
      const userAddress = handleSignIn(payload);
      if (userAddress) {
        state.address = userAddress;
        state.signedIn = true;
       
      }
    },
    signOut: (state) => {
      handleSignOut();
      state.address = '';
      state.signedIn = false;
      state.isEditor=false;
      
    
    },
    getUser: (state) => {
      const userAddress = getAddress();
      if (userAddress) {
        state.address = userAddress;
        state.signedIn = true;
      }
    },
  },
});

export const selectAuth = (state) => state.auth;

export const { signIn, signOut, getUser } = connectWalletSlice.actions;

export default connectWalletSlice.reducer;
