import { memo } from 'react';
import { useCallback } from 'react';

import { ReactComponent as MMIcon } from '@assets/img/metamask.svg';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Dialog, Typography } from '@mui/material';

import { StyledBody, StyledInner } from './ForceConnect.styled';
import { useConnectWallet } from '@/hooks/useConnectWallet';

const ForceConnect = ({ open, handleClose }) => {
  const { handleConnectWallet } = useConnectWallet();

  const onConnectWallet = useCallback(() => {
    handleConnectWallet().then(() => handleClose());
  }, [handleClose, handleConnectWallet]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <StyledBody>
        <Box>
          <Button
            variant="text"
            onClick={handleClose}
            sx={{
              padding: '10px',
              float: 'right',
              minWidth: '24px',
              width: '24px',
              height: '24px',
            }}
          >
            <CloseIcon />
          </Button>
        </Box>
        <StyledInner>
          <Typography variant="h5" color="secondary.main">
            Connect Wallet
          </Typography>
          <Button
            variant="secondary"
            startIcon={<MMIcon />}
            onClick={onConnectWallet}
          >
            MetaMask
          </Button>
        </StyledInner>
      </StyledBody>
    </Dialog>
  );
};

export default memo(ForceConnect);
