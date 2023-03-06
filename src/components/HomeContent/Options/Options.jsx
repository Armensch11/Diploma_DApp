import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';

import {
  ConnectCreateFindBox,
  BoldTypography,
  StandartTypography,
} from './Options.styled';

export default function Options() {
  return (
    <>
      <Grid
        container
        direction={'column'}
        alignContent="center"
        backgroundColor="background.primary"
        py="5rem"
        sx={{ minHeight: '30rem' }}
      >
        <Grid item>
          <Typography
            variant="h2"
            align="center"
            color="text.primary"
            mb="1.5rem"
          >
            How It Works
          </Typography>
        </Grid>

        <Grid item>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'row',
              // justifyContent: "space-around",
              boxSizing: 'border-box',

              gap: '1.5rem',
            }}
          >
            <Grid item>
              <ConnectCreateFindBox>
                <Box>
                  <Image src="/images/connectIcon.png" width={51} height={43} alt="connect" />
                </Box>

                <Typography variant="h4" color="text.primary">
                  Connect Wallet
                </Typography>
                <Typography variant="body1" color="text.primary">
                  You should be able to connect a your wallet in order to create
                  NFT Diploma.
                </Typography>
              </ConnectCreateFindBox>
            </Grid>
            <Grid item>
              <ConnectCreateFindBox>
                <Box>
                  <Image src="/images/createIcon.png" width={51} height={43} alt="create" />
                </Box>
                <Typography variant="h4" color="text.primary">
                  Create Diploma
                </Typography>
                <Typography variant="body1" color="text.primary">
                  The admin will create your Diploma with your wallet address.
                </Typography>
              </ConnectCreateFindBox>
            </Grid>
            <Grid item>
              <ConnectCreateFindBox>
                <Box>
                  <Image src="/images/findIcon.png" width={51} height={43} alt="find" />
                </Box>
                <Typography variant="h4" color="text.primary">
                  Find Diploma
                </Typography>
                <Typography variant="body1" color="text.primary">
                  Scan the QR or search with your Diploma ID/address to find
                  your NFT Diploma.
                </Typography>
              </ConnectCreateFindBox>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
