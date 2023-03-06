import { Dialog, Typography, Box } from '@mui/material';
import { useState } from 'react';
import LargeDiplomaCard from './LargeDiplomaCard';

const ZoomDiploma = ({ setZoom, data }) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    setZoom(false);
  };
  console.log(data);
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="550px"
        PaperProps={{
          style: {
            borderRadius: '12px',
          },
        }}
      >
        <Box>
          <LargeDiplomaCard {...data} />
        </Box>
      </Dialog>
    </>
  );
};

export default ZoomDiploma;
