import { Grid, Box, Typography, CardMedia } from '@mui/material';
// import web3 from './images/web3.png';
// import web3White from './images/web3White.png';
import Image from 'next/image';
import { StyledGrid } from './Footer.styled';

function Footer({ blue }) {
  const [black, white] = ['#000000', '#FFFFFF'];
  // const icon = blue ? web3White : web3;
  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: `${blue ? '#404FD8' : white}`,
          border: '0.5px solid grey',
          position: 'relative',
          bottom: '0',
          left: '0',
          // marginTop: 'auto',
        }}
      >
        <StyledGrid xs={12} sm={4} item>
          {/* <CardMedia sx={{ position: 'relative' }}>
            <img
              src={icon}
              // width={320}
              // height={200}
              // alt=""
              style={{ objectFit: 'cover' }}
            />
          </CardMedia> */}
          <Box>
            <Image
              src={blue ? '/images/web3White.png' : '/images/web3.png'}
              alt="web3 logo"
              height={64}
              width={136}
            />
          </Box>
        </StyledGrid>
        <StyledGrid xs={12} sm={4} item>
          <Typography sx={{ color: `${blue ? white : black}` }}>
            &copy; About Copyright
          </Typography>
        </StyledGrid>
        <StyledGrid xs={12} sm={4} item>
          <Typography
            sx={{ display: 'inline', color: `${blue ? white : black}` }}
          >
            Powered by:
          </Typography>
          <Typography
            sx={{
              fontWeight: 'bold',
              textDecorationLine: 'underline',
              display: 'inline',
              color: `${blue ? white : black}`,
            }}
          >
            Blockstars
          </Typography>
        </StyledGrid>
      </Grid>
    </>
  );
}
export default Footer;
