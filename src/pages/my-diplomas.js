// import { selectAuth } from '@/features/ConnectWallet/connectWalletSlice';
// import { useRouter } from 'next/router';
// import { useEffect, useState, useCallback } from 'react';
// import { useSelector } from 'react-redux';
// import { Button, TextField, Typography } from '@mui/material';
// import {
//   StyledCardWrapper,
//   StyledLoaderWrapper,
// } from './search/[address].styled';
// import DiplomaCard from '@/components/DiplomaCard';
// import getCallMethod from '@/utils/getCallMethod';
// import getSendMethod from '@/utils/getSendMethod';
// import checkIsEditor from '@/utils/checkIsEditor';
// import getFromIPFS from '@/utils/getFromIpfs';
// import searchByAddress from '@/utils/searchByAddress';
// import ShowDiplomas from '@/components/ShowDiplomas';
// import { ClimbingBoxLoader } from 'react-spinners';
// import { useConnectWallet } from '@/hooks/useConnectWallet';
// function MyDiplomas() {
//   const { address } = useConnectWallet();
//   const [loading, setLoading] = useState(false);
//   const override = { margin: '0 auto' };
//   const router = useRouter();
//   const [diplomas, setDiplomas] = useState([]);
//   //experimental is admin check
//   const [isEditor, setIsEditor] = useState(false);
//   //
//   const handleOnClick = (event) => {
//     event.preventDefault();
//     router.push('/');
//   };

//   useEffect(() => {
//     if (address) {
//       searchByAddress(address, setDiplomas, setLoading);
//     }
//   }, [address]);
//   // return (
//   //   <>
//   //     <ShowDiplomas address={address}/>
//   //   </>
//   // );
//   return (
//     <>
//       {loading && (
//         <StyledLoaderWrapper>
//           <ClimbingBoxLoader
//             loading={loading}
//             color="#4248f5"
//             cssOverride={override}
//             size={35}
//             aria-label="Loading Spinner"
//             data-testid="loader"
//           />
//         </StyledLoaderWrapper>
//       )}
//       {!loading && (
//         <>
//           <Button variant="contained" onClick={handleOnClick}>
//             <Typography variant="body1">Back</Typography>
//           </Button>
//           <StyledCardWrapper>
//             {diplomas?.map((diploma) => (
//               <DiplomaCard key={diploma.dataHash} {...diploma} />
//             ))}
//           </StyledCardWrapper>
//         </>
//       )}
//     </>
//   );
// }

// export default MyDiplomas;

import { useConnectWallet } from '@/hooks/useConnectWallet';

import ShowDiplomas from '@/components/ShowDiplomas';
import { Typography } from '@mui/material';
export default function MyDiplomas() {
  const { address } = useConnectWallet();

  return (
    <>
      <Typography variant="h3" color="#1E2561">
        My Diplomas
      </Typography>
      <ShowDiplomas address={address} />
    </>
  );
}
