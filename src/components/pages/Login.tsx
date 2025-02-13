import { Button } from "@mui/material";
import "./styles/Login.css";
import "./styles/CustomButton.css";

export function Login() {
    return (
        <section className="d-flex section-login">
            <div className="login-form">
                <div className="header-form">
                    <div className="header-icon"></div>
                </div>
                <div className="body-form">
                    <Button className="custom-button" variant="contained" fullWidth>INGRESAR</Button>
                </div>
            </div>
        </section>
    );
}