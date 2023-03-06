import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';

import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';

const AddForm2 = ({
  values,
  handleChange,
  setFieldValue,
  handleCreate,
  generateHash,
}) => {
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState();
  const startOnChangeHandler = (e) => {
    setStart(e.$y.toString());
  };
  const endOnChangeHandler = (e) => {
    setEnd(e.$y.toString());
  };
  const currentYear = new Date().getFullYear();
  useEffect(() => {
    generateHash();
  }, [values]);
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          sx={{
            width: { xs: '350px', sm: '540px' },
            backgroundColor: '#FFFFFF',
            margin: '0 auto',
          }}
        >
          <Grid
            container
            direction={'column'}
            sx={{
              padding: {
                xs: ' 16px 38px 16px 38px',
                sm: ' 32px 76px 32px 76px',
              },
              boxSizing: 'border-box',

              boxShadow: '0px 12px 44px -8px rgba(64, 79, 216, 0.24)',
              borderRadius: '12px',
            }}
          >
            <Grid item xs={12} sx={{ mb: '16px' }}>
              <Typography color="secondary.main">Student Address</Typography>
              <TextField
                placeholder="Student Address"
                id="studentAddress"
                value={values.studentAddress}
                onChange={handleChange}
                fullWidth
                sx={{
                  marginTop: '8px',
                  borderRadius: '8px',
                  bgcolor: '#F1F2F5',
                  '& fieldset': { border: 'none' },
                }}
              />
            </Grid>
            <Grid item xs={12} sx={{ mb: '16px' }}>
              <Typography color="secondary.main">Faculty</Typography>
              <TextField
                placeholder="Student Faculty"
                id="faculty"
                value={values.faculty}
                onChange={handleChange}
                fullWidth
                sx={{
                  marginTop: '8px',
                  borderRadius: '8px',
                  bgcolor: '#F1F2F5',
                  '& fieldset': { border: 'none' },
                }}
              />
            </Grid>
            <Grid item xs={12} sx={{ mb: '24px' }}>
              <Typography color="secondary.main">GPA</Typography>
              <TextField
                placeholder="Ex: 90.8"
                id="gpa"
                value={values.gpa}
                onChange={handleChange}
                fullWidth
                sx={{
                  marginTop: '8px',
                  borderRadius: '8px',
                  bgcolor: '#F1F2F5',
                  '& fieldset': { border: 'none' },
                }}
              />
            </Grid>
            <Grid xs={12} item sx={{ mb: '16px' }}>
              <RadioGroup
                xs={12}
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="bachelor"
                name="degreeType"
                onChange={handleChange}
              >
                <FormControlLabel
                  sx={{ mr: 12, color: '#1e2561cc' }}
                  value="bachelor"
                  control={<Radio xs={6} />}
                  label="Bachelor"
                />
                <FormControlLabel
                  sx={{ color: '#1e2561cc' }}
                  value="master"
                  control={<Radio xs={6} />}
                  label="Master"
                />
              </RadioGroup>
            </Grid>
            <Grid
              container
              direction="row"
              sx={{
                // border: 1,
                boxSizing: 'border-box',
                mb: '32px',
              }}
            >
              <Grid xs={12} sm={6} item>
                <Typography color="secondary.main">Start Date</Typography>

                <DatePicker
                  openTo="year"
                  views={['year']}
                  value={start}
                  PopperProps={{
                    sx: {
                      '& .MuiPaper-root': {
                        color: '#404FD8',
                      },
                    },
                  }}
                  components={{ OpenPickerIcon: ExpandMoreIcon }}
                  minDate={(currentYear - 8).toString()}
                  maxDate={currentYear.toString()}
                  onChange={(e) => {
                    startOnChangeHandler(e);
                    setFieldValue('from', e.$y.toString(), true);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{
                        marginTop: '8px',
                        mr: '8px',
                        borderRadius: '8px',

                        bgcolor: '#F1F2F5',
                        '& fieldset': { border: 'none' },
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <Typography color="secondary.main">End Date</Typography>

                <DatePicker
                  openTo="year"
                  views={['year']}
                  value={end}
                  components={{ OpenPickerIcon: ExpandMoreIcon }}
                  PopperProps={{
                    sx: {
                      '& .MuiPaper-root': {
                        color: '#404FD8',
                      },
                    },
                  }}
                  minDate={(currentYear - 8).toString()}
                  maxDate={currentYear.toString()}
                  onChange={(e) => {
                    endOnChangeHandler(e);
                    setFieldValue('to', e.$y.toString(), true);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{
                        marginTop: '8px',
                        borderRadius: '8px',

                        bgcolor: '#F1F2F5',
                        '& fieldset': { border: 'none' },
                      }}
                    />
                  )}
                />
              </Grid>
            </Grid>

            <Grid item xs={12} align="center" sx={{ mb: '8px' }}>
              <Button
                variant="contained"
                sx={{
                  width: { xs: '250px', sm: '150px' },
                  textTransform: 'none',
                }}
                onClick={handleCreate}
              >
                <Typography>Create</Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </LocalizationProvider>
    </>
  );
};

export default AddForm2;
