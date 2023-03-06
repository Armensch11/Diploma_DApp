import { memo, useCallback, useState } from 'react';

import { ReactComponent as PolytechIcon } from '@assets/img/polytechnic.svg';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

import { Box, Button, Typography, styled } from '@mui/material';
import { beautifyAddress } from '@/utils/beautifyAddress';

import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import Image from 'next/image';
import ZoomDiploma from './ZoomDiploma';

const StyledWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '12px',
  gap: '8px',
  maxWidth: '540px',
  boxSizing: 'border-box',
}));

const StyledCardSection = styled(Box)(() => ({
  width: '100%',
  height: '348px',
  padding: '16px 16px',
}));

const StyledCardContent = styled(Box)(() => ({
  borderRadius: '12px',
  border: '1px solid #404FD8',
  padding: '8px',
  height: '100%',
  backgroundImage: `url("/img/bg.png")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
}));

const StyledIdSection = styled(Box)(() => ({
  display: 'flex',
  width: '30%',
  alignItems: 'center',
  justifyContent: 'space-between',
  // padding: '8px 12px',
  background: '#ffffff',
}));

const StyledLogoPart = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
}));

const LargeDiplomaCard = ({
  // name,
  // surname,
  degreeType,
  faculty,
  from,
  gpa,
  id,
  studentAddress,
  to,
}) => {
  const { copy } = useCopyToClipboard();
  const handleAddressCopy = (e) => {
    e.stopPropagation();
    copy(studentAddress);
  };
  const handleCopy = useCallback(() => {
    copy(id);
  }, [id, copy]);

  const capitalize = (str) => {
    let degreeCapitalized = '';
    if (str) {
      degreeCapitalized = str[0].toUpperCase() + str.slice(1);
    }
    return degreeCapitalized;
  };

  // let honor = " border: '1px solid #404FD8'";
  // if (true) {
  //   honor = "border: '1px solid #EDC768'";
  // }
  return (
    <>
      <StyledWrapper>
        <StyledCardSection>
          <StyledCardContent
            sx={{
              border: `${
                degreeType === 'bachelor'
                  ? '1px solid #404FD8'
                  : '1px solid #EDC768'
              }`,
            }}
          >
            <StyledLogoPart>
              <PolytechIcon />
            </StyledLogoPart>

            <Box display="flex" flexDirection="column" gap="6px">
              <Typography variant="body3" color="rgba(30, 37, 97, 0.8)">
                Student Address:
              </Typography>
              <Box
                variant="body1"
                sx={{
                  display: 'flex',
                  flexDirection: 'row',

                  minHeight: '24px',
                  minWidth: '142px',
                }}
              >
                <Typography
                  sx={{ textDecoration: 'underline' }}
                  variant="body4"
                  color="secondary.main"
                  mr="1rem"
                >
                  {studentAddress}
                </Typography>
                <Button
                  variant="secondary"
                  onClick={handleAddressCopy}
                  align="center"
                  startIcon={<ContentCopyOutlinedIcon />}
                  sx={{
                    '& .MuiButton-startIcon': { margin: '0px' },
                    minWidth: 0,
                    width: '24px',
                    height: '24px',
                    borderRadius: '4px',
                    margin: '0 auto',
                  }}
                ></Button>
              </Box>
            </Box>
            <Box display="flex" gap="8px" alignItems="center">
              <Typography variant="body3" color="rgba(30, 37, 97, 0.8)">
                Faculty:
              </Typography>
              <Typography variant="body4" color="secondary.main">
                {faculty}
              </Typography>
            </Box>

            <Box display="flex" gap="8px" alignItems="center">
              <Typography variant="body3" color="rgba(30, 37, 97, 0.8)">
                GPA:
              </Typography>
              <Typography variant="body4" color="secondary.main">
                {gpa}
              </Typography>
            </Box>

            <Box display="flex" flexDirection="column" gap="6px">
              <Typography variant="body4" color="#1E2561CC">
                {capitalize(degreeType)}
              </Typography>
              <Typography variant="body4" color="#1E2561CC">
                {from} - {to}
              </Typography>
            </Box>
            <Box sx={{ position: 'absolute', bottom: '-45px', right: '-26px' }}>
              <Image
                src={
                  degreeType === 'bachelor'
                    ? '/images/bachelor.png'
                    : '/images/master.png'
                }
                alt="medal"
                width={100}
                height={100}
              />
            </Box>
            <StyledIdSection>
              <Typography variant="body4" color="#1E2561CC">
                ID: <Typography variant="body3">{id}</Typography>
              </Typography>
              <Button
                variant="secondary"
                onClick={handleCopy}
                align="center"
                startIcon={<ContentCopyOutlinedIcon />}
                sx={{
                  '& .MuiButton-startIcon': { margin: '0px' },
                  minWidth: 0,
                  width: '24px',
                  height: '24px',
                  borderRadius: '4px',
                  margin: '0 auto',
                }}
              ></Button>
            </StyledIdSection>
          </StyledCardContent>
        </StyledCardSection>
      </StyledWrapper>
    </>
  );
};

export default memo(LargeDiplomaCard);
