import { ThemeProvider } from "@mui/material/styles";
import { ErrorBoundary } from "./ErrorBoundary";
import { theme } from "./styles/MuiOverridesTheme";
import { ReactNode } from "react";

export const ProviderWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <ErrorBoundary fallback={<h1>Ocurrio un error desconocido</h1>}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ErrorBoundary>

    );
}