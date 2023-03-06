// import { ethers } from 'ethers';

// import { useRouter } from 'next/router';
// import { useCallback, useEffect, useState, memo } from 'react';
// import DiplomaCard from '@/components/DiplomaCard';
// import getCallMethod from '../../utils/getCallMethod';
// import getFromIPFS from '@/utils/getFromIpfs';
// import searchByAddress from '../../utils/searchByAddress';
// import searchById from '@/utils/searchById';
// import { StyledCardWrapper, StyledLoaderWrapper } from './[address].styled';
// import { ClimbingBoxLoader } from 'react-spinners';

// function DiplomaSearch() {
//   const [loading, setLoading] = useState(false);
//   const override = {
//     margin: '0 auto',
//   };
//   const router = useRouter();
//   const searchFor = router.query.address?.trim();

//   const isValidHexAddress = ethers.utils.isAddress(searchFor);
//   console.log('entered search is ', isValidHexAddress);
//   const [diplomas, setDiplomas] = useState([]);

//   const search = async () => {
//     setLoading(true);
//     await searchByAddress(searchFor, setDiplomas, setLoading);
//     setLoading(false);
//   };

//   const searchId = async () => {
//     try {
//       setLoading(true);
//       const temp = await searchById(searchFor);
//       if (temp?.length) {
//         setDiplomas(temp);
//         setLoading(false);
//       } else {
//         router.push('/');
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     isValidHexAddress ? search() : searchId();
//   }, [searchFor]);

//   return (
//     <>
//       {loading ? (
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
//       ) : (
//         <StyledCardWrapper>
//           {diplomas?.map((diploma) => (
//             <DiplomaCard key={diploma.dataHash} {...diploma} />
//           ))}
//         </StyledCardWrapper>
//       )}
//     </>
//   );
// }
// export default memo(DiplomaSearch);
import DiplomaSearch from '@/components/DiplomaSearch/DiplomaSearch';
import { useRouter } from 'next/router';
const Search = () => {
  const router = useRouter();
  const searchFor = router.query.address?.trim();
  return (
    <>
      {searchFor ? (
        <DiplomaSearch searchFor={searchFor} />
      ) : (
        <h1>enter something to search for</h1>
      )}
    </>
  );
};

export default Search;
