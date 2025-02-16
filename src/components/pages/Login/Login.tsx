import { Button, Box, Typography } from "@mui/material";
import styles from "./LoginStyles.ts";
import {LoginFormSchema, LoginFormUiSchema} from "./LoginFormSchema.ts";
import Form from "../../../ui/Form.tsx"
import { useState } from "react";
import { Link } from "react-router";

export function Login() {
  const [formData, setFormData] = useState();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = ({data,errors}: {data: any, errors: any}) => {
    if(!errors) {
      setFormData(data);
    }
  }

  return (
    <Box sx={styles.SectionLogin}>
      <Box sx={styles.LoginForm} >
        <Box sx={styles.BodyForm}>
          <Form schema={LoginFormSchema} uiSchema={LoginFormUiSchema} data={formData} onChange={onChange} />
          <Button sx={styles.ButtonStyle} variant="contained" fullWidth>
            INGRESAR
          </Button>
          <Typography sx={styles.SpanStyle} variant="body2">No recordas tus credenciales? <Link to="/">Recuperar</Link></Typography>
        </Box>
      </Box>
    </Box>
  );
}
 