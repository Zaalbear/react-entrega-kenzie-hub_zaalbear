import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../../pages/LoginPage";
import { RegisterPage } from "../../pages/RegisterPage";
import { Dashboard } from "../../pages/Dashboard";
import { SafeRoutes } from "../SafeRoutes";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<SafeRoutes />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
