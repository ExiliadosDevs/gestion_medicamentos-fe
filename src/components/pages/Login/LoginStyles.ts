import { SxProps } from "@mui/system";

const SectionLogin: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "calc(100vh - 80px)",
};

const LoginForm: SxProps = {
  width: "350px",
  height: "400px",
};

const HeaderForm: SxProps = {
  backgroundColor: "#39B598",
  display: "flex",
  justifyContent: "end",
  padding: "20px",
  height: "30px",
  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px",
};

const HeaderIcon: SxProps = {
  backgroundColor: "#60DCBF",
  height: "25px",
  width: "25px",
  borderRadius: "50%",
};

const BodyForm: SxProps = {
  minHeight: "300px",
  backgroundColor: "#F1F1F1",
  borderBottom: "1px solid #c1c1c1",
  borderLeft: "1px solid #c1c1c1",
  borderRight: "1px solid #c1c1c1",
  borderEndEndRadius: "10px",
  borderEndStartRadius: "10px",
  padding: "20px 30px",
};

const ButtonStyle: SxProps = {
  color: "#fff",
  boxShadow: "none",
  backgroundColor: "#fff",
  "&:hover": {
    boxShadow: "none",
    background: "color-mix(in srgb, #60DCBF, #000 10%)",
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
