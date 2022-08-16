import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export let theme = createTheme({
  typography: {
    fontFamily: 'Kanit',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  shape: {
    borderRadius: 0,
  },
  palette: {
    primary: {
      main: '#CED2D7',
      light: '#D7EEC8',
    },
    secondary: {
      main: '#134B96',
    },
    error: {
      main: '#C51C1C',
    },
    text: {
      primary: '#0B1D35',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        fontSize: '16px',
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          color: '#0B1D35',
          '&.active': {
            color: '#78C147',
          },
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'md',
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: '580px',
          '@media (min-width: 600px)': {
            maxWidth: '580px',
          },
        },
        maxWidthMd: {
          maxWidth: '1262px',
          '@media (min-width: 900px)': {
            maxWidth: '1262px',
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'success',
      },
      styleOverrides: {
        contained: {
          background: '#78C147',
          borderRadius: '0',
          boxShadow: 'none',
          minHeight: '48px',
          fontSize: '20px',
          fontWeight: 500,
          textTransform: 'inherit',
          transition: 'all 0.3s ease-in-out',

          '&:hover': {
            boxShadow: 'none',
            background: '#78C147',
          },
        },
        outlined: {
          borderRadius: '0',
          boxShadow: 'none',
          minHeight: '48px',
          fontSize: '20px',
          fontWeight: 500,
          textTransform: 'inherit',
          transition: 'all 0.3s ease-in-out',
          border: '2px solid #78C147',

          '&:hover': {
            boxShadow: 'none',
            background: '#78C147',
            color: '#fff',
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          background: '#CED2D7',
          fontSize: '20px !important',
          lineHeight: '30px !important',
          fontWeight: 'bold !important',
          TextTransform: 'capitalize !important',
          '&.MuiTab-root.Mui-selected': {
            background: '#0B1D35',
            color: '#fff',
            fontSize: '20px',
            lineHeight: '30px',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInput-underline:after': {
            borderColor: '#CED2D7',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#CED2D7',
            },
            '&:hover fieldset': {
              borderColor: '#CED2D7',
              color: '#78C147',
            },
            '&.Mui-focused fieldset': {
              borderBottom: '3px solid #78C147',
            },
            '&.Mui-focused input': {
              color: '#0B1D35',
              caretColor: '#78C147',
            },
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          height: '48px',
          '& .MuiOutlinedInput-notchedOutline': {
            borderWidth: '2px',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#CED2D7',
            },
            '&:hover fieldset': {
              borderColor: '#CED2D7',
            },
            '&.Mui-focused fieldset': {
              borderBottom: '3px solid #78C147',
            },
            '&.Mui-focused input': {
              color: '#0B1D35',
              caretColor: '#78C147',
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'blue',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#CED2D7',
            borderBottom: '1px solid red',
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: '#CED2D7 !important',
            borderBottom: '3px solid #C51C1C !important',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          background: '#f1f2f3',
          height: '48px',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: `transparent`,
        },
        flexContainer: {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: '40px',
          gridGap: '10px',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          background: 'none !important',
          '&:hover': {
            backgroundColor: '$labelcolor',
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          background: '#fff !important',
          color: '#CED2D7 !important',
          padding: '0',
          margin: '9px',
          '&.Mui-checked': {
            color: '#78C147 !important',
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color: '#0B1D35',
          '& .MuiFormControlLabel-label': {
            color: '#3C4A5D !important',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          background: '#fff !important',
          color: '#CED2D7 !important',
          '&.Mui-checked': {
            color: '#78C147 !important',
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          paddingTop: '1px !important',
          paddingBottom: '0 !important',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          background: 'none !important',
          fontWeight: '400 !important',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: '0px !important',
          marginRight: '0px !important',
          marginLeft: '0px !important',
          color: '#C51C1C',
          fontWeight: '600',
          fontSize: '12px',
          lineHeight: '18px',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          top: '14px !important',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
