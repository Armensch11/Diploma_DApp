import { useEffect, useState, useCallback } from 'react';

import { Button, Box, Typography } from '@mui/material';

import { StyledCardWrapper, StyledLoaderWrapper } from './ShowDiplomas.styled';
import { ClimbingBoxLoader } from 'react-spinners';
import DiplomaCard from '@/components/DiplomaCard';
import { useRouter } from 'next/router';

import searchByAddress from '@/utils/searchByAddress';

const ShowDiplomas = ({ address }) => {
  const router = useRouter();

  const [diplomas, setDiplomas] = useState([]);
  //experimental is editor check
  const [isEditor, setIsEditor] = useState(false);
  const [loading, setLoading] = useState(false);
  //
  const handleOnClick = (event) => {
    event.preventDefault();
    router.push('/');
  };

  useEffect(() => {
    searchByAddress(address, setDiplomas, setLoading);
  }, [address]);
  console.log('till here is ok');
  return (
    <>
      {loading && (
        <StyledLoaderWrapper>
          <ClimbingBoxLoader
            loading={loading}
            color="#4248f5"
            // cssOverride={override}
            size={35}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </StyledLoaderWrapper>
      )}
      {!loading && (
        <>
          <StyledCardWrapper>
            {diplomas?.map((diploma) => (
              <DiplomaCard key={diploma.dataHash} {...diploma} />
            ))}
          </StyledCardWrapper>
          <Box fullWidth align="center">
            
            <Button
              sx={{
                mt: '40px',
                bgcolor: '#E5E7F8',
                '&.MuiButtonBase-root:hover': {
                  backgroundColor: '#E5E7F8',
                  border: '1px solid #404FD8',
                },
              }}
              onClick={handleOnClick}
            >
              <Typography variant="body1" color="text.secondary">
                Back
              </Typography>
            </Button>
          </Box>
        </>
      )}
    </>
  );
};

export default ShowDiplomas;
