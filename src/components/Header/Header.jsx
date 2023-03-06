import { memo, useCallback, useState, useEffect } from 'react';

import { Button, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import { StyledBlock, StyledRightBlock, StyledWrapper } from './Header.styled';
import Logo from '@/components/Logo';
import ConnectWallet from '@/features/ConnectWallet';
import {
  selectAuth,
  signOut,
} from '@/features/ConnectWallet/connectWalletSlice';

import { useToggle } from '@/hooks/useToggle';
import ForceConnect from '@/modals/ForceConnect/ForceConnect';
import { useWeb3React } from '@web3-react/core';
import injected from '@/utils/getInjectedConnector';
import checkIsEditor from '@/utils/checkIsEditor';
import cookieCutter from 'cookie-cutter';

const Header = () => {
  const { value, setValue, toggle } = useToggle();
  const router = useRouter();
  //
  const [isEditor, setIsEditor] = useState(false);
  const { deactivate } = useWeb3React();
  const [searchTerm, setSearchTerm] = useState(null);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      router.push(`/search/${searchTerm}`);
    }
  };
  const handleOnChangeOnSearch = useCallback((e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }, []);
  const handleOnClickOnSearch = useCallback(() => {
    setSearchTerm('');
    // router.push('/');
  }, []);
  //
  const { address, signedIn } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    if (!signedIn) {
      setValue(true);
      return;
    }
    router.push('/my-diplomas');
  }, [router, signedIn]);

  const handleDisconnect = () => {
    dispatch(signOut());
    deactivate(injected);
  };

  const getStatus = async () => {
    if (address) {
      const check = await checkIsEditor(address);
      setIsEditor(check);
      cookieCutter.set('editor', isEditor);
    }
  };
  useEffect(() => {
    getStatus();

    console.log(isEditor);
  }, [address]);
  return (
    <>
      <StyledWrapper>
        <StyledBlock>
          <Logo />
          <TextField
            variant="filled"
            placeholder="Student address or Diploma ID"
            fullWidth
            // value={searchTerm}
            onChange={handleOnChangeOnSearch}
            onClick={handleOnClickOnSearch}
            onKeyDown={handleKeyDown}
          />
        </StyledBlock>

        <StyledRightBlock>
          {!isEditor && (
            <Button variant="text" onClick={handleClick}>
              <Typography variant="body1">My Diplomas</Typography>
            </Button>
          )}
          {signedIn && (
            <Button variant="text" onClick={handleDisconnect}>
              <Typography variant="button">Disconnect</Typography>
            </Button>
          )}
          <ConnectWallet />
        </StyledRightBlock>
      </StyledWrapper>

      <ForceConnect open={value} handleClose={toggle} />
    </>
  );
};

export default memo(Header);
