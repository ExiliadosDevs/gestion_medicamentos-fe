import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#60DCBF",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1976d2", // Color del borde
          }
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#1976d2", // Color del label,
          "& .Mui-focused": {
            borderColor: "#0f0"
          }
        },
      },
    },
  },
});
