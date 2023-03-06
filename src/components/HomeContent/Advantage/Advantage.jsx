import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { StyledBox } from './Advantage.styled';
import Image from 'next/image';

export default function Advantage() {
  return (
    <>
      <Grid
        container
        direction={'column'}
        alignItems="center"
        gap="1rem"
        sx={{ minHeight: '40rem', py: '4rem' }}
      >
        <Grid item align="center">
          <Typography variant="h2" color="#1E2561">
            The Advantage Of This Method
          </Typography>
          <Typography
            sx={{
              color: '#1E2561',
              fontSize: '16px',
              marginBottom: '1.75rem',
              width: '30rem',
              textAlign: 'center',
            }}
          >
            Storing important information like diplomas on a blockchain system
            has many benefits
          </Typography>
        </Grid>
        <StyledBox
          display="flex"
          align="flex-start"
          direction="row"
          sx={{ width: { xs: '100%', sm: '80%', md: '50%' } }}
        >
          <Box
            sx={{
              width: '60px',
              height: '60px',
              flexShrink: '0',
              marginRight: '1.5rem',
            }}
          >
            <Image src="/images/starIcon.png" width={60} height={62} alt="star" />
          </Box>

          <Typography sx={{ color: '#1E2561', fontSize: '16px' }}>
            It ensures that the information is secure and cannot be altered or
            deleted. This gives peace of mind to the individual and can also
            increase the value of their diploma if it is stored as a
            Non-Fungible Token (NFT)
          </Typography>
        </StyledBox>
        <StyledBox
          display="flex"
          align="flex-start"
          direction="row"
          sx={{ width: { xs: '100%', sm: '80%', md: '50%' } }}
        >
          <Box
            sx={{
              width: '60px',
              flexShrink: '0',
              marginRight: '1.5rem',
              // // height: "60px",
              // backgroundImage: `url(${circleIcon})`,
              // backgroundSize: "cover",
              // backgroundPosition: "center",
              // backgroundRepeat: "no-repeat",
            }}
          >
            <Image src="/images/circleIcon.png" width={54} height={56} alt="circle"/>
          </Box>

          <Typography sx={{ color: '#1E2561', fontSize: '16px' }}>
            Having the information on the blockchain makes it easily accessible
            and verifiable, eliminating the need for paper copies and making it
            easier for employers to verify the validity of a diploma
          </Typography>
        </StyledBox>
        <StyledBox
          display="flex"
          align="flex-start"
          direction="row"
          sx={{ width: { xs: '100%', sm: '80%', md: '50%' } }}
        >
          <Box sx={{ width: '60px', flexShrink: '0', marginRight: '1.5rem' }}>
            <Image src="/images/polygonIcon.png" width={60} height={69} alt="triangle" />
          </Box>

          <Typography sx={{ color: '#1E2561', fontSize: '16px' }}>
            Keeping track of important information using blockchain technology
            is a smart choice for individuals and organizations
          </Typography>
        </StyledBox>
      </Grid>
    </>
  );
}
