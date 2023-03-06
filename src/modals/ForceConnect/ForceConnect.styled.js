import { Box, styled } from '@mui/material';

export const StyledBody = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 30px 32px',
  width: '352px',
}));

export const StyledInner = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '50px',
}));
