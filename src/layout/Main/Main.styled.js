import { Box, styled } from '@mui/material';

export const StyledWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundImage: `url("/img/bg.png")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}));
