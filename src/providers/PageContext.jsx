import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { kenzieHubAPI } from "../components/services/index.js";

export const PageContext = createContext({});

export const PageProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const [techList, setTechList] = useState([])

  useEffect(() => {
    const autoLogin = async () => {
      const token = localStorage.getItem("@user_token");

      if (token) {
        try {
          const { data } = await kenzieHubAPI.get(`/profile`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUserData(data);
          setTechList(data.techs)
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
        }
      }
    };
    autoLogin();
  }, []);

  const registerSubmit = async (formData) => {
    try {
      const { data } = await kenzieHubAPI.post("/users", formData);
      navigate("/");

      Toastify({
        text: "Conta cadastrada com sucesso!",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    } catch (error) {
      Toastify({
        text: error.response.data.message,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "red",
        },
      }).showToast();
    }
  };

  const loginSubmit = async (formData) => {
    try {
      const { data } = await kenzieHubAPI.post("/sessions", formData);
      localStorage.setItem("@user_token", data.token);
      setUserData(data.user);
      setTechList(data.techs)
      navigate("/dashboard");
    } catch (error) {
      Toastify({
        text: error.response.data.message,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "red",
        },
      }).showToast();
    }
  };

  const exit = () => {
    localStorage.removeItem("@user_token");
    setUserData("");
    setTechList(null)
    navigate("/");
  };

  return (
    <PageContext.Provider
      value={{
        userData,
        loginSubmit,
        registerSubmit,
        exit,
        techList,
        setTechList,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
