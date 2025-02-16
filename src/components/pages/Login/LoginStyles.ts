import { dFlexCenter } from "@global-styles/classes";
import { c1, c3 } from "@global-styles/colors";
import { SxProps } from "@mui/system";

const SectionLogin: SxProps = {
  ...dFlexCenter,
  height: "calc(100vh - 80px)",
};

const LoginForm: SxProps = {
  width: "350px",
  height: "400px",
};

const BodyForm: SxProps = {
  backgroundColor: "#F1F1F1",
  border: `1px solid ${c3}`,
  borderRadius: "10px",
  padding: "20px 30px",
  display: "flex",
  flexDirection: "column",
};

const ButtonStyle: SxProps = {
  fontWeight:"600",
  boxShadow: "none",
  color: "#fff",
  backgroundColor: "#39B598",
  margin:"12px 0",
  "&:hover": {
    boxShadow: "none",
    background: `color-mix(in srgb, ${c1}, #000 10%)`,
  },
};

const SpanStyle: SxProps = {
  color: "#696464"
}

export default {
  SectionLogin,
  LoginForm,
  BodyForm,
  ButtonStyle,
  SpanStyle
};
