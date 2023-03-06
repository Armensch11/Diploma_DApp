import { memo, useCallback, useState } from 'react';

import { ReactComponent as PolytechIcon } from '@assets/img/polytechnic.svg';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

import { Box, Button, Typography } from '@mui/material';
import { beautifyAddress } from '@/utils/beautifyAddress';
import {
  StyledIdSection,
  StyledWrapper,
  StyledId,
  StyledCardSection,
  StyledCardContent,
  StyledLogoPart,
} from './DiplomaCard.styled';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import Image from 'next/image';
import ZoomDiploma from '../Dialogs/ZoomDiploma';

const DiplomaCard = ({
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
  const [zoom, setZoom] = useState(false);
  const zoomHandler = () => setZoom(true);
  const { copy } = useCopyToClipboard();
  const handleAddressCopy = (e) => {
    e.stopPropagation();
    copy(studentAddress);
  };
  const handleCopy = useCallback(() => {
    copy(id);
  }, [id, copy]);
  let degreeCapitalized = '';
  if (degreeType) {
    degreeCapitalized = degreeType[0].toUpperCase() + degreeType.slice(1);
  }
  // let honor = " border: '1px solid #404FD8'";
  // if (true) {
  //   honor = "border: '1px solid #EDC768'";
  // }
  return (
    <>
      {!zoom ? (
        <StyledWrapper>
          <StyledCardSection onClick={zoomHandler}>
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

                <Box display="flex" flexDirection="column" gap="6px">
                  {/* <Typography variant="body2">Student:</Typography> */}
                  {/* <Typography
                sx={{ textDecoration: 'underline' }}
                variant="body1"
                color="secondary.main"
              >
                {`${name} ${surname}`}
              </Typography> */}
                  <Typography variant="body2" color="text.default">
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
                      variant="body1"
                      color="secondary.main"
                    >
                      {beautifyAddress(studentAddress)}
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
              </StyledLogoPart>

              <Box display="flex" gap="8px" alignItems="center">
                <Typography variant="body2" color="text.default">
                  Faculty:
                </Typography>
                <Typography variant="body1" color="secondary.main">
                  {faculty}
                </Typography>
              </Box>

              <Box display="flex" gap="8px" alignItems="center">
                <Typography variant="body2" color="text.default">
                  GPA:
                </Typography>
                <Typography variant="body1" color="secondary.main">
                  {gpa}
                </Typography>
              </Box>

              <Box display="flex" flexDirection="column" gap="6px">
                <Typography variant="body1" color="secondary.main">
                  {degreeCapitalized}
                </Typography>
                <Typography variant="body1" color="secondary.main">
                  {from} - {to}
                </Typography>
              </Box>
              <Box
                sx={{ position: 'absolute', bottom: '-45px', right: '-26px' }}
              >
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
            </StyledCardContent>
          </StyledCardSection>
          <StyledIdSection>
            <StyledId variant="subtitle2" color="secondary.main">
              <span>ID:{id}</span>
            </StyledId>
            <Button
              variant="secondary"
              onClick={handleCopy}
              sx={{
                padding: '0',
                minWidth: '34px',
                width: '34px',
                height: '34px',
              }}
            >
              <ContentCopyOutlinedIcon />
            </Button>
          </StyledIdSection>
        </StyledWrapper>
      ) : (
        <ZoomDiploma
          setZoom={setZoom}
          data={{ studentAddress, faculty, gpa, degreeType, id, from, to }}
        />
      )}
    </>
  );
};

export default memo(DiplomaCard);
