import { styled, Box } from '@mui/material';

export const StyledCardWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '24px',
}));

export const StyledLoaderWrapper = styled(Box)(() => ({
  display: 'flex',
  height: '100vh',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  // border: '1px solid black',
}));