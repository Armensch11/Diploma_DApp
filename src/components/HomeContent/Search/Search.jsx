import { Grid, Button, TextField, Typography } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
// import { BoldTypography, StandartTypography } from "./Search.styled";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const handleSearchChange = (e) => {
    // console.log(e);
    setSearchTerm(e.target.value);
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    
    router.push(`search/${searchTerm}`);
  };
  return (
    <>
      <Grid
        container
        sx={{
          height: '30rem',
          backgroundColor: '#404FD8',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '4rem',
        }}
      >
        <Grid
          item
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          <Typography variant="h2" color="text.primary" align="center">
            Search All NFT Diplomas Now!
          </Typography>
          <Typography
            color="text.primary"
            variant="body1"
            align="center"
            width={'30rem'}
            // sx={{ width: '30rem' }}
          >
            Fill in a specific Diploma ID or address to find all existing
            Diplomas that match the input.
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          <TextField
            sx={{
              boxSizing: 'border-box',
              backgroundColor: '#F1F2F5',
              borderRadius: '8px',
              borderColor: '#F1F2F5',
              width: '30rem',
              height: '3rem',
            }}
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{ boxSizing: 'border-box', border: 'none' }}
                >
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Enter Student Address or Diploma ID"
          />

          <Button
            onClick={handleButtonClick}
            sx={{
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              textTransform: 'none',
              boxSizing: 'border-box',
              width: '9.8rem',
              height: '2.7rem',
              '&:hover': {
                backgroundColor: '#f2f2f2',
                boxShadow: '0px 6px 8px -3px ',
              },
            }}
          >
            <Typography color="text.secondary" variant={'body1'}>
              Search
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
