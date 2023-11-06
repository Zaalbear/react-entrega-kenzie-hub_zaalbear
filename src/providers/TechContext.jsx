import { createContext, useContext, useEffect, useState } from "react";
import { PageContext } from "./PageContext";
import { kenzieHubAPI } from "../components/services";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [editingTech, setEditingTech] = useState(null);
  const { techList, setTechList } = useContext(PageContext);
  const token = localStorage.getItem("@user_token");

  useEffect(() => {
    const getTech = async () => {
      const { data } = await kenzieHubAPI.get('/profile', {
        headers: {
          authorization: `Bearer ${token}`,
        }
      })
      setTechList(data.techs)
    }
    getTech()
  }, [])

  const createTech = async (formData) => {
    try {
      const { data } = await kenzieHubAPI.post("/users/techs", formData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      setTechList([...techList, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTech = async (formData) => {
    try {
      const { data } = await kenzieHubAPI.put(`/users/techs/${editingTech.id}`,formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      const newTechList = techList.map((tech) => {
        if(tech.id === editingTech.id) {
            return data
        } else {
            return tech
        }
      })
      setTechList(newTechList);
      setEditingTech(null)
    } catch (error) {
        console.log(error);
    }
  };

  const deleteTech = async (deletingId) => {
    try {
      const { data } = await kenzieHubAPI.delete(`/users/techs/${deletingId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      const newTechList = techList.filter((tech) => tech.id !== deletingId);
      setTechList(newTechList);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{ createTech, deleteTech, editingTech, setEditingTech, updateTech }}
    >
      {children}
    </TechContext.Provider>
  );
};
