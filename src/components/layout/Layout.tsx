import { ThemeProvider } from "@mui/material/styles";
import { Outlet } from "react-router";
import { Header } from "./Header";
import { theme } from "./styles/MuiOverridesTheme";

export function Layout() {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <main>
                <Outlet />
            </main>
        </ThemeProvider>
    );
}