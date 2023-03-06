import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AddIcon from '@mui/icons-material/Add';
import { Button, Typography } from '@mui/material';
import { UnsupportedChainIdError } from '@web3-react/core';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { StyledBtnWrapper } from './ConnectWallet.styled';
import { useConnectWallet } from '@/hooks/useConnectWallet';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { beautifyAddress } from '@/utils/beautifyAddress';
import checkIsEditor from '@/utils/checkIsEditor';

const ConnectWallet = () => {
  const router = useRouter();
  const { address, handleConnectWallet, error, signedIn } = useConnectWallet();
  const { copy } = useCopyToClipboard();

  //
  const [isEditor, setIsEditor] = useState(false);
  const getStatus = async () => {
    if (address) {
      const check = await checkIsEditor(address);
      console.log(check);
      setIsEditor(check);
    }
  };
  useEffect(() => {
    getStatus();
  }, [address]);

  //console.log('signer is', signer);
  //
  const copyAddress = () => {
    copy(address);
  };

  const onAdd = () => {
    router.push('/create');
  };

  if (!signedIn) {
    return (
      <Button
        variant="primary"
        startIcon={<AccountBalanceWalletOutlinedIcon />}
        onClick={handleConnectWallet}
      >
        Connect Wallet
      </Button>
    );
  }

  return (
    <StyledBtnWrapper>
      {isEditor && (
        <Button
          variant="secondary"
          onClick={onAdd}
          sx={{
            padding: '13px',
            minWidth: '40px',
            width: '40px',
            height: '40px',
          }}
        >
          <AddIcon />
        </Button>
      )}
      <Button
        variant="secondary"
        onClick={copyAddress}
        startIcon={<AccountBalanceWalletOutlinedIcon />}
      >
        <Typography variant="body1" fontWeight="500">
          {error instanceof UnsupportedChainIdError
            ? 'Wrong Network'
            : beautifyAddress(address)}
        </Typography>
      </Button>
    </StyledBtnWrapper>
  );
};

export default ConnectWallet;
