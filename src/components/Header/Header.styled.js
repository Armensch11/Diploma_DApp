import { Box, styled } from '@mui/material';

export const StyledWrapper = styled('header')(() => ({
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: '50px',
}));

export const StyledBlock = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  flex: 0.5,
  gap: '50px',
}));

export const StyledRightBlock = styled(StyledBlock)(() => ({
  justifyContent: 'flex-end',
}));
