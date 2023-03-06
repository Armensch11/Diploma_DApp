import { useState } from 'react';
import { Button, Dialog, Typography, Box } from '@mui/material';
import DiplomaCard from '../DiplomaCard';
import Image from 'next/image';

const CreateDialog = ({ reset, values, tokenId, setModal }) => {
  // console.log(values);
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    setModal(false);
    reset();
  };
  return (
    <>
      <Dialog onClose={handleClose} open={open} values={values}>
        <Box
          sx={{
            width: '496px',
            height: '537px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            boxSizing: 'border-box',
            gap: '1rem',
            position: 'relative',

            boxShadow: '0px 12px 44px -8px rgba(64, 79, 216, 0.24)',
            borderRadius: '12px',
          }}
        >
          <Box
            onClick={handleClose}
            sx={{
              position: 'absolute',
              boxSizing: 'border-box',
              borderRadius: '2px',
              width: '18px',
              height: '18px',
              padding: '2px 2px ',
              top: '21px',
              right: '21px',
              '&:hover': {
                boxShadow: '0px 4px 13px -2px rgba(64, 79, 216, 0.6)',
                color: 'text.secondary',
              },
            }}
          >
            <Image fill src="/images/Vectorclose.png" />
          </Box>
          <Typography variant="h6" color="secondary.main">
            Your Diploma Created Successfully
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              bgcolor: 'grey',
              boxSizing: 'border-box',
              mb: '2rem',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: '0px',
                left: '0px',
                boxSizing: 'border-box',
              }}
            >
              <Image src="/images/greenCircle.png" width={32} height={36} />
            </Box>

            <Box
              sx={{
                position: 'absolute',
                top: '4px',
                left: '8px',
                boxSizing: 'border-box',
                zIndex: 20,
              }}
            >
              <Image src="/images/whiteTick.png" width={16} height={9.5} />
            </Box>
          </Box>
          <DiplomaCard {...values} id={tokenId} />
          <Button
            onClick={handleClose}
            sx={{
              mt: '2rem',
              bgcolor: '#404FD8',
              color: 'text.primary',
              width: '157px',
              height: '43px',
              '&:hover': {
                boxShadow: 'none',
                color: 'text.secondary',
              },
            }}
          >
            Create New
          </Button>
        </Box>
      </Dialog>
    </>
  );
};

export default CreateDialog;
