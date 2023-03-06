import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
  palette: {
    // mode: 'light',
    // primary: {
    //   main: '#FFFFFF',
    // },
    secondary: {
      main: '#1E2561',
    },
    background: {
      primary: '#404FD8',
      secondary: '#E5E7F8',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#404FD8',
      default: 'rgba(30, 37, 97, 0.8)',
    },
  },
  spacing: 8,
  typography: {
    h1: {
      fontFamily: 'Roboto-Bold',
    },
    h2: {
      fontFamily: 'Roboto-Bold',
      fontWeight: 700,
      fontSize: '54px',
      lineHeight: '64px',
    },
    h3: {
      fontFamily: 'Roboto-Regular',
      fontWeight: 400,
      fontSize: '32px',
      lineHeight: '37px',
    },
    h4: {
      fontFamily: 'Roboto-Regular',
      fontWeight: 400,
      fontSize: '26px',
      lineHeight: '40px',
    },
    h5: {
      fontFamily: 'Roboto-Bold',
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '28px',
    },
    h6: {
      fontFamily: 'Roboto-Regular',
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '28px',
    },
    body1: {
      fontFamily: 'Roboto-Regular',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '18px',
    },
    body2: {
      fontFamily: 'Roboto-Medium',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '16px',
    },
    body3: {
      fontFamily: 'Roboto-Regular',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '16px',
    },
    body4: {
      fontFamily: 'Roboto-Medium',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '16px',
    },
    subtitle1: {
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '22px',
    },
    subtitle2: {
      fontFamily: 'Roboto-Regular',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '18px',
    },
    subtitle3: {
      fontFamily: 'Roboto-Regular',
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '26px',
    },
    caption: {
      fontFamily: 'Lato',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '16px',
    },
  },
  components: {
    MuiTextField: {
      variants: [
        {
          props: { variant: 'filled' },
          style: ({ theme }) => ({
            '& .MuiFilledInput-root': {
              background: `${theme.palette.background.secondary} !important`,
              color: theme.palette.secondary.main,
            },
            '& .MuiInputBase-root': {
              '&:before,&:after': {
                display: 'none',
              },
              background: theme.palette.background.secondary,
              '&:hover': {
                background: theme.palette.background.secondary,
              },
            },
          }),
        },
      ],
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              border: '1px solid #404FD8',
            },
          },
          fieldset: { border: 'none' },
          input: { padding: '0px' },
          '& .MuiInputBase-root': {
            padding: '12px 16px',
            background: '#F1F2F5',
            color: '#1E2561',
            borderRadius: '8px',
            height: '50px',
            fontFamily: 'Roboto-Regular',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '19px',
          },
          '& input[type=number]::-webkit-outer-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
          },
          '& input[type=number]::-webkit-inner-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'text' },
          style: {
            background: 'none',
            color: '#1E2561',
          },
        },
        {
          props: { variant: 'primary' },
          style: ({ theme }) => ({
            borderRadius: '8px',
            background: theme.palette.background.primary,
            border: `1px solid ${theme.palette.background.primary}`,
            color: theme.palette.text.primary,
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '19px',
            '&:hover': {
              background: 'rgba(64, 79, 216, 0.12)',
              color: theme.palette.text.secondary,
            },
          }),
        },
        {
          props: { variant: 'secondary' },
          style: ({ theme }) => ({
            borderRadius: '8px',
            background: theme.palette.background.secondary,
            border: `1px solid transparent`,
            color: theme.palette.text.secondary,
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '19px',
            '&:hover': {
              background: 'rgba(64, 79, 216, 0.12)',
              border: `1px solid ${theme.palette.background.primary}`,
            },
          }),
        },
      ],
      styleOverrides: {
        startIcon: {
          margin: '0 10px 0 0',
        },
        root: ({ ownerState: { startIcon, disabled } }) => ({
          padding: startIcon ? '12px 16px' : '12px 24px',
          fontFamily: 'Roboto-Medium',
          textTransform: 'none',
          ...(disabled && {
            color: '#B5B8D4',
            background: 'rgba(64, 79, 216, 0.12) !important',
            borderColor: 'transparent !important',
          }),
        }),
      },
    },
  },
});

export default theme;
