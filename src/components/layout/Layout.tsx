import { Container } from "@mui/material";
import { Outlet } from "react-router";
import { Header } from "./Header";
import { ProviderWrapper } from "./ProviderWrapper";

export function Layout() {
    return (
        <ProviderWrapper>
            <>
                <Header />
                <Container>
                    <Outlet />
                </Container>
            </>
        </ProviderWrapper>
    );
}