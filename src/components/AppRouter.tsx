import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Layout } from "./layout/Layout";
import { Login } from "./pages/Login/Login";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<h1>Error 404: Page Not Found</h1>} />
                <Route path="/" element={<Navigate to="/login" />} />
                <Route element={<Layout />}>
                    <Route path="/login" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}