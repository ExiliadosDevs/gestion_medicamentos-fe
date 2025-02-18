import { c1, c2, c4, c5 } from "@global-styles/colors";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: c1,
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: c4, // Color de texto al escribir en el input
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: c4,// Color del placeholder del input
          '&.Mui-focused': {
            color: c5, // Color del label cuando el input está enfocado
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: c2, // Color del borde al hacer hover
          }
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginBottom: '10px', // Añade espacio debajo de cada campo
        },
      },
    }
  }
});
