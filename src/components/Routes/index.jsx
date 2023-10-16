import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../../pages/LoginPage";
import { RegisterPage } from "../../pages/RegisterPage";
import { Dashboard } from "../../pages/Dashboard";
import { useState } from "react";

export const MainRoutes = () => {
  const [ userData, setUserData] = useState("")

  return (
    <Routes>
        <Route path="/" element={<LoginPage setUserData={setUserData} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard userData={userData} setUserData={setUserData} />} />
    </Routes>
  )
} 