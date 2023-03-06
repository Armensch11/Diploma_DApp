import { Box, Typography } from '@mui/material';

import CreateForm from './CreateForm/CreateForm';

const CreateDiploma = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography
        variant="h3"
        fontWeight="700"
        color="#1E2561"
        marginBottom="32px"
      >
        Add Student Diploma
      </Typography>
      <CreateForm />
    </Box>
  );
};

export default CreateDiploma;
