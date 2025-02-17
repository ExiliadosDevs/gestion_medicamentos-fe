import { c1, c2, c4 } from "@global-styles/colors";
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
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: c4,// Color del placeholder del input
          '&.Mui-focused': {
            color: c2, // Color del label cuando el input está enfocado
          },
        },
      },
    },
  },
});
