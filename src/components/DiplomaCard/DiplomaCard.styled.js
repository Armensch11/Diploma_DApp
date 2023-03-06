import { styled, Box, Typography } from '@mui/material';
import { relative } from 'path';

export const StyledWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',

  gap: '8px',
  width: '352px',
}));

const StyledBlock = styled(Box)(() => ({
  boxShadow: '0px 12px 44px -8px rgba(64, 79, 216, 0.24)',
  borderRadius: '12px',
}));

export const StyledCardSection = styled(StyledBlock)(() => ({
  width: '100%',
  height: '242px',
  padding: '8px',
}));

export const StyledCardContent = styled(Box)(() => ({
  borderRadius: '12px',
  border: '1px solid #404FD8',
  padding: '16px',
  height: '100%',
  backgroundImage: `url("/img/bg.png")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position:"relative"
}));

export const StyledIdSection = styled(StyledBlock)(() => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '8px 12px',
  background: '#ffffff',
}));

export const StyledId = styled(Typography)(() => ({
  '& span': {
    fontWeight: 500,
  },
}));

export const StyledLogoPart = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
}));
