import { Box } from '@mui/material';

import DiplomaCard from '@/components/DiplomaCard';

const TopDiplomas = () => {
  return (
    <Box>
      <DiplomaCard
        id="dshfgjdsfhjdsgfdsbgds"
        degreeType="master"
        faculty="web3"
        from={2014}
        to={2024}
        gpa={98}
        studentAddress="0x92736rtvghdsiuibfsgvfjh"
      />
    </Box>
  );
};

export default TopDiplomas;
