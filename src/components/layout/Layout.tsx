import { ThemeProvider } from "@mui/material/styles";
import { Outlet } from "react-router";
import { Header } from "./Header";
import { theme } from "./styles/MuiOverridesTheme";
import { Container } from "@mui/material";

export function Layout() {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Container>
                <Outlet />
            </Container>
        </ThemeProvider>
    );
}