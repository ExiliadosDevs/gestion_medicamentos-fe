import { dFlexCenter } from "@global-styles/classes";
import { c1, c2, c3 } from "@global-styles/colors";
import { SxProps } from "@mui/system";

const SectionLogin: SxProps = {
  ...dFlexCenter,
  height: "calc(100vh - 80px)",
};

const LoginForm: SxProps = {
  width: "350px",
  height: "400px",
};

const HeaderForm: SxProps = {
  backgroundColor: c2,
  display: "flex",
  justifyContent: "end",
  padding: "20px",
  height: "30px",
  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px",
};

const HeaderIcon: SxProps = {
  backgroundColor: c1,
  height: "25px",
  width: "25px",
  borderRadius: "50%",
};

const BodyForm: SxProps = {
  minHeight: "300px",
  backgroundColor: "#F1F1F1",
  borderBottom: `1px solid ${c3}`,
  borderLeft: `1px solid ${c3}`,
  borderRight: `1px solid ${c3}`,
  borderEndEndRadius: "10px",
  borderEndStartRadius: "10px",
  padding: "20px 30px",
};

const ButtonStyle: SxProps = {
  color: "#fff",
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none",
    background: `color-mix(in srgb, ${c1}, #000 10%)`,
  },
};

export default {
  SectionLogin,
  LoginForm,
  HeaderForm,
  HeaderIcon,
  BodyForm,
  ButtonStyle,
};
