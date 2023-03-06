import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';

export default function Intro() {
  return (
    <>
      <Grid container sx={{ height: { xs: '60rem', md: '40rem' } }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              boxSizing: 'border-box',
              width: '24.5rem',

              marginTop: '12.25rem',
              marginLeft: '10.5rem',
            }}
          >
            <Typography variant="h2" color="secondary.main">
              Your Own NFT Diploma
            </Typography>
          </Box>
          <Box
            sx={{
              boxSizing: 'border-box',
              width: '18.75rem',

              marginTop: '1rem',
              marginLeft: '10.5rem',
            }}
          >
            <Typography variant="subtitle3" color={'secondary.main'}>
              Upload your university Diploma to web3 and make it a unique NFT.
            </Typography>
          </Box>
        </Grid>
        <Grid
          xs={12}
          md={6}
          item
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              height: '22.5rem',
              width: '36rem',
              marginTop: '7rem',
              marginRight: '6.25rem',
              marginBottom: '9rem',
            }}
          >
            <Image src="/images/NftHat.png" width={620} height={410} alt="nft and hat" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
