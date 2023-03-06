import { Container } from '@mui/material';

import { StyledWrapper } from './Main.styled';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const Main = ({ children }) => {
  const router = useRouter();
  console.log(router);

  const isBlue = useMemo(() => {
    if (router.pathname === '/') {
      return true;
    }
    return false;
  }, [router]);

  return (
    <StyledWrapper>
      <Container component="main" disableGutters maxWidth="lg">
        <Header />
        <div style={{ minHeight: '100vh' }}>{children}</div>

        <Footer blue={isBlue} />
      </Container>
    </StyledWrapper>
  );
};

export default Main;
