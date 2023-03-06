import { Box, styled } from '@mui/material';

export const StyledWrapper = styled(Box)(() => ({
  background: '#fff',
  boxShadow: '0px 12px 44px -8px rgba(64, 79, 216, 0.24)',
  borderRadius: '12px',
  padding: '32px 75px',
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
}));

export const StyledInputs = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
}));
