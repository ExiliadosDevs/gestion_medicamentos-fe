import { Button, Box } from "@mui/material";
import styles from "./LoginStyles.ts";

export function Login() {

  return (
    <Box sx={styles.SectionLogin}>
      <Box sx={styles.LoginForm} >
        <Box sx={styles.HeaderForm}>
          <Box sx={styles.HeaderIcon}></Box>
        </Box>
        <Box sx={styles.BodyForm}>
            {/*aca va el formulario*/}
          <Button sx={styles.ButtonStyle} variant="contained" fullWidth>
            INGRESAR
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
