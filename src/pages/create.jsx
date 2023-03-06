import { selectAuth } from '@/features/ConnectWallet/connectWalletSlice';
import CreateDiploma from '@/features/CreateDiploma';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import checkIsEditor from '@/utils/checkIsEditor';
import { ClimbingBoxLoader } from 'react-spinners';
import { styled, Grid } from '@mui/material';

function CreatePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { address } = useSelector(selectAuth);

  const check = async () => {
    try {
      setLoading(true);

      const temp = await checkIsEditor(address);
      if (!temp) {
        router.push('/');
      }

      //  console.log(loading);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    check();
  }, []);
  // useEffect(() => {
  //   console.log(isEditor);
  //   if (!isEditor) {
  //     router.push('/');
  //   }
  // }, [isEditor]);
  return (
    <>
      {loading ? (
        <Grid
          container
          height="80vh"
          sx={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <ClimbingBoxLoader
            loading={loading}
            color="#4248f5"
            // cssOverride={override}
            size={35}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </Grid>
      ) : (
        <CreateDiploma />
      )}
    </>
  );
}

export default CreatePage;
